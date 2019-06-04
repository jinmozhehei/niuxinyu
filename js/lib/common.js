//求随机数（自定义范围）[n,m]
function randomS(n, m) {
	var ranS = parseInt(n + Math.random() * (m - n + 1));
	return ranS;
}
//生成四位数(纯数字)验证码------为字符串型
function yzmRn4() {
	var s;
	var a = "";
	for (var i = 1; i <= 4; i++) {
		s = (parseInt(Math.random() * 10));
		a += String(s);
		//			a+=s;
	}
	return a;
}
//求和[n,m]
function sum(n, m) {
	if (n == m) {
		return m;
	}
	return n + sum(n + 1, m);
}
//获取数组最大值
function getMax(a) {
	var max = a[0];
	for (var i = 0; i < a.length; i++) {
		if (max <= a[i]) {
			max = a[i];
		}
	}
	return max;
}
//获取数组最小值
function getMin(a) {
	var min = a[0];
	for (var i = 0; i < a.length; i++) {
		if (min >= a[i]) {
			min = a[i];
		}
	}
	return min;
}
//冒泡排序,从大到小
function maoPaoX_n(arr) {
	var temp = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
//冒泡排序,从小到大
function maoPaoN_x(arr) {
	var temp = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

//选择排序，从小到大
function xuanZeN_x(a) {
	var temp = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i; j < arr.length; j++) {
			if (a[i] < a[j]) {
				temp = a[j];
				a[j] = a[i];
				a[i] = temp;
			}
		}
	}
	return a;
}
//选择排序，从大到小
function xuanZeN_x(a) {
	var temp = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i; j < arr.length; j++) {
			if (a[i] > a[j]) {
				temp = a[j];
				a[j] = a[i];
				a[i] = temp;
			}
		}
	}
	return a;
}

//快速排序
function QuickRow(arr) {
    //取中间值
    var index = arr.length % 2 == 0 ? arr.length / 2 : (arr.length + 1) / 2;
    //中间值
    var mid = arr[index];
    var left = [];
    var right = [];
    if (arr.length < 2) {
        return arr;
    }
    //核心
    for (var i = 0; i < arr.length; i++) {
        if (index != i && arr[i] < mid) {
            left.push(arr[i]);
        }
        if (index != i && arr[i] >= mid) {
            right.push(arr[i]);
        }
    }
    return QuickRow(left).concat(mid).concat(QuickRow(right));
}
//找数组中最大值
function getMax(arr) {
	var max = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}
//找数组中最小值
function getMin(arr) {
	var min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
	}
	return min;
}
//获取当前时间
function getDate(d, sign) {
    sign = sign ? sign : "/";

    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    return year + sign + dZero(month) + sign + dZero(date) + " " + dZero(h) + ":" + dZero(m) + ":" + dZero(s);
}
//当数字为个位数时，默认前面添加字符0
function dZero(n) {
    n = n < 10 ? "0" + n : n;
    return n;
}


//获取当前元素距离页面的偏移量（距离）
function offset(ele) {
	var obj = {};
	obj.l = ele.offsetLeft;
	obj.t = ele.offsetTop;
	while (ele.offsetParent) {
		ele = ele.offsetParent;
		obj.l += ele.offsetLeft;
		obj.t += ele.offsetTop;
	}
	return obj;
}

//设置new-cookie
function setcookie(key,val,expires){
	var d = new Date();
	d.setDate(d.getDate()+expires);
	document.cookie = key+"="+val+";path=/;expires="+d;
}
//查找cookie
function getcookie(key){
	var cookies = document.cookie;
	var arr = cookies.split(";");
	for(var i = 0;j<arr.length;i++){
		var newArr = arr[i].split("=");
		if(newArr[0] == key){
			return newArr[1];
		}
	}
}
//删除cookie
function removecookie(key){
    setcookie(key,"",-1);
}


//根据元素及属性名获取非行内样式
function getStyle(ele, attr) {
	if (ele.currentStyle) {
		return ele.currentStyle[attr];
	} else {
		return getComputedStyle(ele, false)[attr];
	}
}
//完美运动框架
function move(ele, obj, callback) {
	clearInterval(ele.timer);
	ele.timer = setInterval(function () {
		var bStop = true;
		for (var attr in obj) {
			//获取当前元素的属性的起始位置
			var iCur;
			if (attr == "opacity") {
				iCur = getStyle(ele, attr) * 100;
			} else {
				iCur = parseInt(getStyle(ele, attr));
			}
			//算速度
			var speed = (obj[attr] - iCur) / 8;
			speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);	
			//查看谁还没有到
			if(obj[attr] != iCur){
				bStop = false;
			}
			//运动原理
			if (attr == "opacity") {
				ele.style.opacity = (iCur + speed) / 100;
				ele.style.filter = 'alpha(opacity:' + (iCur + speed) + ')';
			} else {
				ele.style[attr] = iCur + speed + 'px';
			}		   
		}
		 //终止条件
		if(bStop){
			clearInterval(ele.timer);
			callback && callback();
		}
	}, 30)
}