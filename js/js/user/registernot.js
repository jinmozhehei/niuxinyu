function Register() {
    this.into();
}

Register.prototype = {
    into() {
        this.oupBtn();
    },
    oupBtn() {
        var obtn = document.getElementById("btn");
        obtn.addEventListener("click", this.updata.bind(this));
    },
    updata() {
        var nick = document.getElementById("inputnick3");
        var pass = document.getElementById("inputPassword3");
        var towpass = document.getElementById("inputtwoPassword3");
        this.urlPhone = location.href.split("?")[1].split("=")[1];
        
        axios({
            method: "post",
            url: "http://localhost/imooc/ajax/php/userregister.php",
            data: {
                phone: this.urlPhone,
                nick: nick.value,
                password: pass.value
            }
        }).then(new Register().newdata.bind(this));
    },
    newdata(data) {       
        var nick = document.getElementById("inputnick3");
        var pass = document.getElementById("inputPassword3");
        var towpass = document.getElementById("inputtwoPassword3");

        if (data.status) {
            // 成功
            this.userSign(nick.value)
            alert(data.info);
            // 给新用户创建一个空购物车
            var arr = [];
            axios({
                method:"post",
                url:"http://localhost/imooc/ajax/php/user/user_cart.php",
                data:{
                    name:this.urlPhone,
                    time:new Date(),
                    number:0,
                    commodity:"[]"
                }
            }).then(function(data){
                console.log(data)
            })
            location.href = "http://localhost/imooc/";
        } else {
            alert(data.info);
            nick.value = "";
            pass.value = "";
            towpass.value = "";
        }

    },
    userSign(name) {
        // Session
        var urlPhone = location.href.split("?")[1].split("=")[1];
        sessionStorage.setItem("current_username", urlPhone + '=' + name);
    }
}
new Register();