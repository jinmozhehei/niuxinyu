

class Learn {
    constructor() {
        this.id = location.href.split("?")[1].split("=")[1];
        this.session = sessionStorage.getItem("current_username");
    }
    oA() {
        $("#purchase").on("click", this.current.bind(this));
        $("#upcomm").on("click", this.current.bind(this));
    }
    current(e) {
        // 先判断用户是否登录
        if (this.session) {
            axios({
                method: "get",
                url: "http://localhost/imooc/ajax/php/learn/learn_data.php",
                data: {
                    user: this.session.split("=")[0]
                }
            }).then(this.shopping.bind(this,));


        } else {
            alert("请先登录！");
        }
        setTimeout(function(){
            if(e.target.id =="purchase"){
                location.href = "http://localhost/imooc/html/cart.html";
            }
        },2000)
        
    }
    shopping(data) {
        var data = JSON.parse(data.commodity);
        var bStop = true;
        for (var i  in data) {
            if (data[i] == this.id) {
                bStop = false;
                alert("已存在该商品！！");
                break;
            }
        }
        if (bStop) {
            
            data.push(Number(this.id));
            axios({
                method: "post",
                url: "http://localhost/imooc/ajax/php/learn/learn_updata.php",
                data: {
                    name: this.session.split("=")[0],
                    newdata: data
                }
            }).then(this.dataOk.bind(this));
        }
    }
    dataOk(data){
        if(data.status){
            alert("商品添加"+data.info+"!!!");
        }
        
    }
}

let learn = new Learn();
learn.oA();