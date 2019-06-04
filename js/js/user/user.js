// class User {
//     constructor() {
//         this.$modal = $(".modal-content").eq(0);
//         this.ta = true;
//     }
//     immedia() {
//         this.clickUser();
//         this.oMuser();
//         this.obtn();
//         this.Session();
//     }
//     //未登录时，点击nav选择登录/注册
//     clickUser() {
//         $("#user").on("click", $.prox(this.oAuser,this));
//     }
//     oAuser(e) {
//         var tager = e.target 
//         // 登录
//         if (tager.tagName == "A" && tager.className == "alogin") {
//             this.userstyle(this.ta = true);
//         } else if (tager.tagName == "A" && tager.className == "aregister") {
//             this.userstyle(this.ta = false);
//         } else if (tager.tagName == "A" && tager.id == "logout") {
//             // 清除Session
//             sessionStorage.removeItem("current_username");
//             // 改变导航栏
//             var str = `<a href="" class="alogin" data-toggle="modal" data-target="#myModal">登录</a>/
//         <a class="aregister" data-toggle="modal" data-target="#myModal">注册</a>`;
//             $("#user").html(str);
//         }
//     }
// }


function User() {
    this.modal = document.getElementsByClassName("modal-content")[0];
    this.oUser = document.getElementById("user");
    this.ta = true;
    this.into();
}
User.prototype = {
    into() {
        this.clickUser();
        this.oMuser();
        this.obtn();
        this.Session();
    },
    //未登录时，点击nav选择登录/注册
    clickUser() {
        this.oUser.addEventListener("click", this.oAuser.bind(this));
    },
    oAuser(e) {
        var e = e || Event;
        var tager = e.target || e.srcElement;
        if (tager.tagName == "A" && tager.className == "alogin") {
            this.userstyle(this.ta = true);
        } else if (tager.tagName == "A" && tager.className == "aregister") {
            this.userstyle(this.ta = false);
        } else if (tager.tagName == "A" && tager.id == "logout") {
            // 清除Session
            sessionStorage.removeItem("current_username");
            // 改变导航栏
            var str = `<a href="" class="alogin" data-toggle="modal" data-target="#myModal">登录</a>/
        <a class="aregister" data-toggle="modal" data-target="#myModal">注册</a>`;
            $("#user").html(str);
        }
    },
    //点击模态框选择登录/注册
    oMuser() {
        this.modal.addEventListener("click", this.tabUser.bind(this));
    },
    tabUser(e) {
        var e = e || Event;
        var tager = e.target || e.srcElement;
        var header = this.modal.getElementsByClassName("modal-header");
        if (tager.tagName == "A" && tager.id == "login") {
            this.userstyle(this.ta = true);
        } else if (tager.tagName == "A" && tager.id == "register") {
            this.userstyle(this.ta = false);
        }
    },
    userstyle(ta) {
        this.modal.innerHTML = "";
        ta = this.ta;
        if (ta) {
            var login = new Login();
            this.modal.innerHTML = login.addlogin();
        } else {
            this.modal.innerHTML = new Register().addRegister();
            this.regran = document.getElementById("regran");
            var ran = yzmRn4();
            this.regran.innerText = ran;
            this.regran.addEventListener("click", this.reset.bind(this))
        }
    },
    reset() {
        var ran = yzmRn4();
        this.regran.innerText = ran;
    },
    obtn() {
        var oBtn = document.getElementById("btn");
        this.modal.addEventListener("click", this.subimtBtn.bind(this));
    },
    subimtBtn(e) {
        var e = e || Event;
        var tager = e.target || e.srcElement;
        if (tager.tagName == "BUTTON" && tager.id == "btnl") {
            new Login().oLogin();
        } else if (tager.tagName == "BUTTON" && tager.id == "btnr") {
            new Register().oRegister();
        }

    },
    // 页面打开时，查找Session判断登录状态
    Session() {
        var session = sessionStorage.getItem("current_username");
        if (session) {
            var nick = `<a href="http://localhost/imooc/html/cart.html" >${session.split("=")[1]}</a>/
            <a   id="logout">注销</a>`;
            $("#user").html(nick);
        }
    }
}
new User();