function List() {
    this.$main = $("#lestmain");
    this.pagination = document.getElementsByClassName("pagination")[0];
    this.disabled = this.pagination.getElementsByClassName("disabled")[0];
    this.lilist = this.pagination.getElementsByClassName("lilist")[0];
    this.into();
}

List.prototype = {
    into() {
        this.sqllist();
    },
    // 获取数据库数据
    sqllist() {
        axios({
            method: "get",
            url: "http://localhost/imooc/ajax/php/index/index_rendering.php",
            data: {
                project: 'novice'
            }
        }).then(this.page.bind(this));
    },
    page(data) {
        this.pageul(data);
    },
    //初始状态，分页
    pageul(data) {
        //总共页数    
        var $page = Math.ceil(data.length / 18);
        this.$pageArr = [];
        this.rendering($(".active>span").text(), data);
        // 点击数字页码
        $(".pagination").on("click", "li>span", [data, $page], $.proxy(this.clickePafe, this));
        // 左右箭头，首页，末尾页
        $(".disabled").on("click", [data, 1], $.proxy(this.headtail, this));
        $(".lilist").on("click", [data, $page], $.proxy(this.headtail, this));

    },
    // 渲染
    rendering(page, data) {
        var str = "";
        for (var i = (page - 1) * 18; i < Math.min(page * 18, data.length); i++) {
            str += `<div class="course-card-container">
         <a href="http://localhost/imooc/html/learn.html?id=${data[i].id}" class="course-card" >
            <div class="course-card-top">
                <img class="course-banner lazy"
                    src="${data[i].src}"
                    style="display: inline;">
                <div class="course-label">
                    <label>Java</label>
                </div>
            </div>
            <div class="course-card-content">
                <h3 class="course-card-name">${data[i].name}</h3>
                <div class="clearfix course-card-bottom">
                    <div class="course-card-info">
                        <span>初级</span><span><i class="icon-set_sns"></i>9501</span>
                    </div>
                    <p class="course-card-desc">快速入门并实战分布式任务调度框架Dubbo</p>
                </div>
            </div>
        </a>
    </div>`
        }
        this.$main.html(str);
        // 渲染结束前页面为空白，body——>display：none
        $("body").css("display", "block");

    },
    // 点击数字页码
    clickePafe(e) {
        $(".pagination>li").removeClass("active");
        var page = Number($(e.target).text());

        var newpage = [];
        if (page >= 4 && page <= (e.data[1] - 3)) {
            newpage = [page - 3, page - 2, page - 1, page, page + 1, page + 2, page + 3];
            $(".pagination>li>span").eq(3).parent().addClass("active");
        } else if (page < 4) {
            newpage = [1, 2, 3, 4, 5, 6, 7];
            $(e.target).parent().addClass("active");
        } else if (page > (e.data[1] - 3)) {
            console.log(e.data[1] - 4);
            newpage = [e.data[1] - 6, e.data[1] - 5, e.data[1] - 4, e.data[1] - 3, e.data[1] - 2, e.data[1] - 1, e.data[1]];
            $(e.target).parent().addClass("active");
        }
        $.each($(".pagination>li>span"), function (index) {
            $(".pagination>li>span").eq(index).text(newpage[index]);
        })
        this.rendering(page, e.data[0]);
    },
    // 首尾页
    headtail(e){
        $(".pagination>li").removeClass("active");
        var newpage = [];
        var page = e.data[1];
        if(e.data[1] == 1){
            newpage = [1, 2, 3, 4, 5, 6, 7];
            $(".pagination>li>span").eq(0).parent().addClass("active");
            page = 1 ;
        }else{    
            newpage = [e.data[1] - 6, e.data[1] - 5, e.data[1] - 4, e.data[1] - 3, e.data[1] - 2, e.data[1] - 1, e.data[1]];
            $(".pagination>li>span").eq(6).parent().addClass("active");
        }
        $.each($(".pagination>li>span"), function (index) {
            $(".pagination>li>span").eq(index).text(newpage[index]);
        })
        this.rendering(page, e.data[0]);
    }

}

new List();