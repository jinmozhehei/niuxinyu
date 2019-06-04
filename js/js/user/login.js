function Login() {

}
        Login.temp = `<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <a class="login ared" id="login">登录</a><a class="register" id="register">注册</a>
        </div>
        <div class="modal-body" id="login">
        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label"></label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputUsername3" placeholder="登录手机号或邮箱">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label"></label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码">
                </div>
            </div>
            <div class="form-group">
                <div class="checkbox left">
                    <label>
                        <input type="checkbox">
                        <span>七天内自动登录</span>
                    </label>
                    <div class="help right">
                        <span>找回密码</span>|
                        <span>无法登陆</span>
                    </div>
                </div>
            </div>
        </form>
        <div class="modal-footer" id="register">
        <button type="button" class="btn btn-danger" id="btnl">登录</button>
        </div>
        </div>`;
    
Login.prototype = {
    into() {
        this.addlogin();
    },
    addlogin() {
        return Login.temp;

    },
    oLogin() {
        // 获取用户名和密码
        this.name = document.getElementById("inputUsername3");
        this.password = document.getElementById("inputPassword3");
        axios({
            method: "post",
            url: "http://localhost/imooc/ajax/php/userlogin.php",
            data: {
                username: this.name.value,
                password: this.password.value
            }
        }).then(this.userOk.bind(this));
    },
    userOk(data) {
        if (data.status) {
            this.userSign(data.info.nick);
            
            alert("登录成功");
            //此处this指向为window
            this.popup(data);
            location.reload();
        } else {
            alert("用户名不存在");
        }
    },
    // 登录成功导航栏改变
    popup(data) {
        var name = data.info.nick;
        var oUser = document.getElementById("user");
        var nick = `<a href="http://localhost/imooc/html/cart.html" >${name}</a>/
        <a   id="logout">注销</a>`;
        oUser.innerHTML = nick;
        var myModal = document.getElementById("myModal");
        var backdrop = document.getElementsByClassName("modal-backdrop")[0];
        myModal.style.display = "none";
        backdrop.remove();
        // 绑定注销事件
        $("#logout").on("click", this.logout);
    },
    userSign(name) {
        // Session
        sessionStorage.setItem("current_username", $("#inputUsername3").val() + '=' + name);
        // 七天免登陆cookie
        if ($(".form-group label>input").prop("checked")) {
            console.log("OK")
            setcookie("login_username", $("#inputUsername3").val(), 7);
        }
    },
    logout() {
        // 清除Session
        sessionStorage.removeItem("current_username");
        // 改变导航栏
        var str = `<a href="" class="alogin" data-toggle="modal" data-target="#myModal">登录</a>/
        <a class="aregister" data-toggle="modal" data-target="#myModal">注册</a>`;
        $("#user").html(str);        
    }


}