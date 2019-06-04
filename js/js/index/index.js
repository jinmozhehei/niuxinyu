// nav搜索框获得焦点
function oSearch(){
    this.search = document.getElementsByClassName("search")[0];
    this.seBox = this.search.getElementsByClassName("search-box")[0];
    this.seMag = this.search.getElementsByClassName("search-Magnifier")[0];

    this.into();
}
oSearch.prototype = {
    into:function(){
        this.oFocus();
    },
    oFocus:function(){
        var inp = this.search.querySelector("input");
        inp.addEventListener("focus",this.changered.bind(this));
        inp.addEventListener("blur",this.oBlur.bind(this));
    },
    changered:function(){
        this.seBox.style.borderColor = "#f01414";
        this.seMag.style.backgroundColor = "#f9a1a1";
        this.seMag.children[0].style.color="#f01414";
    },
    oBlur:function(){
        console.log(1);
        this.seBox.style.borderColor = "";
        this.seMag.style.backgroundColor = "";
        this.seMag.children[0].style.color="";
    }
}

new oSearch();

// 轮播图
function Planting() {
    this.conimg = document.getElementById("content-img");
    this.oUl = this.conimg.getElementsByTagName("ul")[0];
    this.aLi = this.oUl.getElementsByTagName("li");
    this.odir = document.getElementById("dir");
    this.aDir = document.querySelectorAll("#dir>a");
    this.aA = document.querySelectorAll("#circular>a");
    this.ocircular = document.getElementById("circular");
    this.iw = this.aLi[0].offsetWidth;
    this.iNow = 0;
    this.n = 0;
    this.timer = null;
    this.into();
}
Planting.prototype = {
    into:function(){
        this.start();
        this.touchmouseover();
        this.touchmouseout();
        this.oDirLeft();
        this.oDirRight();
        this.dot();
    },
    dot:function(){
        for (var i = 0; i < this.aA.length; i++) {
                this.aA[i].index = i;
                this.aA[i].addEventListener("click",this.clickdot.bind(this,this.aA[i].index) )
            }
    },
    clickdot:function (it) {
        console.log(it)
        this.iNow = it;
        this.toImg();
    },
    oDirLeft:function(){
        this.aDir[0].addEventListener("click",this.oDirLeftFn.bind(this) );
    },
    oDirLeftFn:function () {
        if (this.iNow == 0) {
            this.n = this.iNow;
            this.iNow = this.aA.length - 1;
        } else {
            this.iNow--;
        }
        this.toImg();
    },
    oDirRight:function(){
        this.aDir[1].addEventListener("click",this.oDirRightFn.bind(this) );
    },
    oDirRightFn:function () {
            if (this.iNow == this.aA.length - 1) {
                this.n = this.iNow;
                this.iNow = 0;
            } else {
                this.iNow++;
            }
            this.toImg();
        },
    touchmouseover:function(){
        this.conimg.addEventListener("mouseover", this.touchover.bind(this));
    },
    touchover:function(){
            clearInterval(this.timer);
            this.odir.style.display = "block";
            this.ocircular.style.display = "block";
    },
    touchmouseout:function(){
        this.conimg.addEventListener("mouseout", this.touchout.bind(this));
    },
    touchout:function(){
        this.start();
        this.odir.style.display = "none";
        this.ocircular.style.display = "none";
    },
    start:function(){
        this.timer = setInterval(this.core.bind(this), 3000);
    },
    core:function(){
            if (this.iNow == this.aLi.length - 1) {
                this.iNow = 0;
            } else {
                this.iNow++;
            }
            this.toImg();
    },
    toImg:function(){
        for (var i = 0; i < this.aA.length; i++) {
            this.aA[i].className = "";
        }
        this.aA[this.iNow].className = "active";
        move(this.aLi[this.n], { opacity: 0 });
        move(this.aLi[this.iNow], { opacity: 100 });
        this.n = this.iNow;
    },
}
new Planting();