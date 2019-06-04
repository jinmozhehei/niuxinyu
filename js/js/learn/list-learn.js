// 根据url获取id,渲染
class Gerendering {
    getid() {
        var id = location.href.split("?")[1].split("=")[1];
        this.ajajxid(id);
    }
    ajajxid(id) {
        axios({
            method: "get",
            url: "http://localhost/imooc/ajax/php/learn/learn.php",
            data: {
                "id": id
            }
        }).then(this.rendering)
    }
    // 渲染
    rendering(data) {
        var data = data[0];
        $(".pricenumber").text(data.money);
        var str = "";
        //hd 
        str = `<h2 class="left">${data.name}</h2>`
        $(".hd").html(str);
        // statics 
        str = `<div class="teacher-info left">
        <a href="/u/100015/courses?sort=publish" target="_blank">
            <img data-userid="100015" class="js-usercard-dialog"
                src="//img1.mukewang.com/5b88f1f50001688401500150-80-80.jpg" width="80" height="80">
        </a>
        <span class="tit">
            <a href="/u/100015/courses?sort=publish" target="_blank">慕课官方号</a><i class="icon-imooc"></i>
        </span>
        <span class="job">页面重构设计</span>
    </div>
    <div class="static-item left">
        <span class="meta">难度</span><span class="meta-value">${data.garde}</span>
    </div>
    <div class="static-item left">
        <span class="meta">时长</span><span class="meta-value"> 9小时18分</span>
    </div>
    <div class="static-item l">
        <span class="meta">学习人数</span><span class="meta-value js-learn-num">${data.number}</span>
    </div>
    <div class="static-item l score-btn">
        <span class="meta">综合评分</span>
        <span class="meta-value">9.5</span>
    </div>`
        $("statics").html(str);
        $("body").css("display","block");

      
    }
}
new Gerendering().getid();