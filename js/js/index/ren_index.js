// 实战推荐
function Rendering() {
    this.init();

}

Rendering.prototype = {
    init() {
        this.actual();
        this.newCurriculum();
        this.novice();
        this.technology();
        this.front();
    },
    // 实战推荐
    actual() {
        var _this = this;
        axios({
            method: "get",
            url: "http://localhost/imooc/ajax/php/index/index_rendering.php",
            data: {project:'actual'}
        }).then(this.actualData.bind(this, _this));
    },
    actualData(_this, data) {
        this.$clearfix = $("#actual");
        var temp = "";
        for (var i = 0;i<5;i++) {
            temp += this.ren(data[i].name, data[i].src, data[i].money, data[i].tese, data[i].id, data[i].number);
        }
        this.$clearfix.html(temp);
    },
    // 新上好课
    newCurriculum() {
        var _this = this;
        axios({
            method: "get",
            url: "http://localhost/imooc/ajax/php/index/index_rendering.php",
            data: {
                project: 'newCurriculum'
            }
        }).then(this.newCurriculumData.bind(this, _this));
    },
    newCurriculumData(_this, data) {
        this.$clearfix = $("#curriculum");
        var temp = "";
        for (var i = 0;i<10;i++) {
            temp += this.ren(data[i].name, data[i].src, data[i].money, data[i].tese, data[i].id, data[i].number);
        }
        this.$clearfix.html(temp);
    },
    // 新手入门
    novice() {
        var _this = this;
        axios({
            method: "get",
            url: "http://localhost/imooc/ajax/php/index/index_rendering.php",
            data: {
                project: 'novice'
            }
        }).then(this.noviceData.bind(this, _this));
    },
    noviceData(_this, data) {
        this.$clearfix = $("#novice");
        var temp = "";
        for (var i = 0;i<10;i++) {
            temp += this.ren(data[i].name, data[i].src, data[i].money, data[i].tese, data[i].id, data[i].number);
        }
        this.$clearfix.html(this.$clearfix.html() + temp);
    },
    // 技术提升
    technology() {
        var _this = this;
        axios({
            method: "get",
            url: "http://localhost/imooc/ajax/php/index/index_rendering.php",
            data: {
                project: 'technology'
            }
        }).then(this.technologyData.bind(this, _this));
    },
    technologyData(_this, data) {
        this.$clearfix = $("#technology");
        var temp = "";
        for (var i = 0;i<10;i++) {
            temp += this.ren(data[i].name, data[i].src, data[i].money, data[i].tese, data[i].id, data[i].number);
        }
        this.$clearfix.html(this.$clearfix.html() + temp);
    },
    // 前沿技术
    front() {
        console.log(111)
        var _this = this;
        axios({
            method: "get",
            url: "http://localhost/imooc/ajax/php/index/index_rendering.php",
            data: {
                project: 'front'
            }
        }).then(this.frontData.bind(this, _this));
    },
    frontData(_this, data) {
        this.$clearfix = $("#front");
        var temp = "";
        for (var i = 0;i<10;i++) {
            temp += this.ren(data[i].name, data[i].src, data[i].money, data[i].tese, data[i].id, data[i].number);
        }
        this.$clearfix.html(this.$clearfix.html() + temp);
        $("body").css("display","block");
    },
    // 渲染
    ren(name, src, money, tese, id, number) {
        var str = `<div class="index-card-container left">
        <a href="http://localhost/imooc/html/learn.html?id=${id}">
            <img src="${src}">
            <div class="course-card-content">
                <h3 class="course-card-name">${name}</h3>
                <div class=" course-card-bottom">
                    <div class="course-card-info">
                        <span>实战</span><span>高级</span><span><i class="iconfont">&#xe61e;</i>${number}</span>
                        <span class="course-star-box right"><i class="iconfont"></i><i class="iconfont"></i><i class="iconfont"></i><i class="iconfont"></i><i class="iconfont"></i></span>
                    </div>
                    <div class="course-card-price sales">￥${money}
                        <span class="sales-tip">${tese}</span>
                    </div>
                </div>
            </div>
        </a>
        </div>`
        return str;
    }
}
new Rendering();