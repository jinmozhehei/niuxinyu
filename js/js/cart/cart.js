var ren = new Rendering();
ren.current()

function Choice() {
    this.all = document.getElementById("allele");
    this.check = document.getElementsByClassName("js-check");
    this.carttable = document.getElementById("carttable");
    this.Altogether = document.getElementsByClassName("jsAltogether")[0];
    this.into();
}

Choice.prototype = {
    into() {
        this.allcheck();
        this.childCheck();
    },
    //全选/全不选
    allcheck() {
        this.all.addEventListener("change", this.select.bind(this));

    },
    select() {
        if (this.all.checked == true) {
            this.childAllCheck(true);
        } else {
            this.childAllCheck(false);
        }
        this.price();
    },
    childAllCheck(data) {
        for (var i = 0; i < this.check.length; i++) {
            this.check[i].checked = data;
        }
    },
    //单选及删除
    childCheck() {
        this.carttable.addEventListener("click", this.childCD.bind(this));
    },

    childCD(e) {
        var e = e || event;
        var tag = e.target || e.srcElement;
        // 单个商品->全选-总价
        if (tag.tagName == "INPUT") {
            // 单个商品->全选
            this.childC();
            // 商品->总价
            this.price();
        }else if(tag.className == "close"){
            this.childD(tag);
        }
        
    },
    childC() {
        var bStop = true;
        for (var i = 0; i < this.check.length; i++) {
            if(this.check[i].checked == false){
                bStop = false;
                break;
            }
        }
        this.all.checked = bStop;
    },
    // 总价
    price(){
        var sum = 0;      
        for (var i = 0; i < this.check.length; i++) {
            if(this.check[i].checked == true){
                sum += Number(this.check[i].parentNode.parentNode.getElementsByClassName("price")[0].querySelector("span").innerText);
            }
        }
        this.Altogether.innerText = sum.toFixed(2);
    },
    // 删
    childD(tag){
        ren.dle($(tag).attr("data-id"))
        // console.log($(tag).attr("data-id"));
        tag.parentNode.parentNode.remove();
        this.price();
    }


}
new Choice();