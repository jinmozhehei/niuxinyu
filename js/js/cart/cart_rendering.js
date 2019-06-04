class Rendering {
    constructor() {
        this.session = sessionStorage.getItem("current_username");
        this.data = "";

    }
    // 判断用户是否登录
    current() {
        if (this.session) {
            axios({
                method: "get",
                url: "http://localhost/imooc/ajax/php/cart/cart_ren.php",
                data: {
                    user: this.session.split("=")[0]
                }
            }).then(this.cartdata.bind(this));


        } else {
            alert("请先登录！");
            window.history.go(-1);
        }
    }
    // 获取用户购物车
    cartdata(data) {
        // 截取商品id
        if (data.commodity != "[]") {
            var data = JSON.parse(data.commodity);

            axios({
                method: "post",
                url: "http://localhost/imooc/ajax/php/cart/cart.php",
                data: {
                    id: data
                }
            }).then(this.rend.bind(this));
        } else {
            $("body").css("display", "block");
        }

        return this.data = data;
    }
    rend(data) {
        var str = "";
        for (var i = 0; i < data.length; i++) {

            str += `<div class="item clearfix js-item-cart js-each-340" data-id="1">
            <div class="item-1">
                <input type="checkbox" class="js-check check imv2-checkbox" data-price="245.00">
            </div>
            <div class="item-2 clearfix">
                <a href="//coding.imooc.com/class/340.html" target="_blank" class="img-box left">
                    <img src="${data[i].src}" width="160" height="90">
                </a>
                <dl class="left has-package">
                    <a href="//coding.imooc.com/class/340.html" target="_blank">
                        <dt>${data[i].name}</dt>
                    </a>
                </dl>
            </div>
            <div class="item-3">
                <div class="price clearfix">
                    <em>￥</em>
                    <span>${data[i].money}</span>
                </div>
            </div>
            <div class="item-4">
                <i class="close" data-id="${data[i].id}">X</i>
            </div>
        </div>`
        }
        $("#settlement").before(str);
        $("body").css("display", "block");
    }
    dle(deldata) {
        var newdata = $.grep(this.data, function (n) {
            return n == deldata;
        }, true);
        this.newData(newdata);
        return this.data = newdata;
    }
    newData(data) {
        axios({
            method: "post",
            url: "http://localhost/imooc/ajax/php/cart/deletecart.php",
            data: {
                name: this.session.split("=")[0],
                newdata: data
            }
        }).then(function (data) {
            console.log(data);
        });
    }
}