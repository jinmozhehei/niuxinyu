function Register() {
    this.into();
}
Register.temp = `<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
        aria-hidden="true">&times;</span></button>
        <a class="login" id="login">登录</a><a class="register ared" id="register">注册</a>
</div>
<div class="modal-body" id="register">
<form class="form-horizontal">
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label"></label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPhone" placeholder="请输入手机号">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-10 regrandom">
            <input type="text" class="form-control" id="inputRandom3" placeholder="请输入验证码">
            <span id="regran"></span>
        </div>
    </div>
    <div class="form-group">
        <div class="checkbox left">
            <label>
                <input type="checkbox">
                <a href="">《同意慕课网注册协议》</a>
            </label>
        </div>
    </div>
</form>
<div class="modal-footer">
    <button type="button" class="btn btn-danger" id="btnr">注册</button>
</div>
</div>`;

Register.prototype = {
    into() {
        this.addRegister();
    },
    addRegister() {
        return Register.temp;
    },
    oRegister() {
        this.phone = document.getElementById("inputPhone");
        this.random = document.getElementById("inputRandom3");
        this.regran = document.getElementById("regran");
        if (/^1(\d){10,10}$/.test(this.phone.value)) {
            if (this.regran.innerText == this.random.value) {
                location.href = "http://localhost/imooc/html/register.html?phone=" + this.phone.value;
            } else {
                alert("验证码错误");
                this.random.value = "";
            }
        }else{
            alert("手机号格式不正确");
            this.phone.value = "";
            this.random.value = "";
            this.regran.innerText = yzmRn4();
        }

    }

}