//==========================================================
//移动端兼容
//==========================================================
viewport(750);

function viewport(iw) {
	var phoneWidth = parseInt(window.screen.width);
	var phoneScale = phoneWidth / iw;
	var ua = navigator.userAgent;
	if (/Android (\d+\.\d+)/.test(ua)) {
		var version = parseFloat(RegExp.$1);
		if (version > 2.3) {
			document.write('<meta name="viewport" content="width=' + iw + ', minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
		} else {
			document.write('<meta name="viewport" content="width=' + iw + ', target-densitydpi=device-dpi">');
		}
	} else {
		document.write('<meta name="viewport" content="width=' + iw + ', user-scalable=no, target-densitydpi=device-dpi">');
	}
};

//采用正则表达式获取地址栏参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

//文字转图片
function numToimg() {
	$(".numToimg").each(function() {
		var num = String($(this).data("num")).split('')
		var numL = num.length;
		var numImg = "";
		for (var i = 0; i < numL; i++) {
			numImg += '<img src="asset/img/num/' + num[i] + '.png"/>'
		}
		$(this).append(numImg)
	})
}

//加载图像回调
function loadImages(sources, callback) {
	var loader = new PxLoader();
	var imgs = sources;
	if (!imgs.length) {
		callback && callback();
		$(".loading").hide();
		return;
	}
	imgs.forEach(function(img) {
		var pxImage = new PxLoaderImage(img);
		loader.add(pxImage);
	});
	loader.addProgressListener(function(e) {
		var percent = (e.completedCount * 100 / e.totalCount).toFixed(0) + "%";
		$(".loading span").html(percent);
		if (e.completedCount == e.totalCount) {
			callback && callback();
			$(".loading").hide();
		}
	});
	loader.start();
}
loadImages([
	'asset/img/1/0.png',
	'asset/img/1/1.png',
	'asset/img/1/2.png',
	'asset/img/1/3.png',
	'asset/img/1/4.png',
	'asset/img/1/a.png',
	'asset/img/1/b.png',
	'asset/img/1/c.png',
	'asset/img/1/last1.png',
	'asset/img/1/last2.png',
	'asset/img/1/last3.png',
	'asset/img/2/1.png',
	'asset/img/2/2.png',
	'asset/img/2/3.png',
	'asset/img/2/3a.png',
	'asset/img/2/3b.png',
	'asset/img/2/3c.png',
	'asset/img/2/3d.png',
	'asset/img/2/3e.png',
	'asset/img/2/3f.png',
	'asset/img/2/3g.png',
	'asset/img/2/4.png',
	'asset/img/2/last1.png',
	'asset/img/2/last2.png',
	'asset/img/2/last3.png',
	'asset/img/3/1.png',
	'asset/img/3/2.png',
	'asset/img/3/3.png',
	'asset/img/3/4.png',
	'asset/img/3/5.png',
	'asset/img/4/1.png',
	'asset/img/4/2.png',
	'asset/img/4/3.png',
	'asset/img/4/4.png',
	'asset/img/4/5.png',
	'asset/img/4/last1.png',
	'asset/img/4/last2.png',
	'asset/img/4/last3.png',
	'asset/img/5/1.png',
	'asset/img/5/2.png',
	'asset/img/5/3.png',
	'asset/img/5/4.png',
	'asset/img/5/5.png',
	'asset/img/5/6.png',
	'asset/img/6/1.png',
	'asset/img/6/2.png',
	'asset/img/6/3.png',
	'asset/img/6/4.png',
	'asset/img/6/5.png',
	'asset/img/6/last1.png',
	'asset/img/6/last2.png',
	'asset/img/6/last3.png',
//	'asset/img/7/1.png',
//	'asset/img/7/2.png',
//	'asset/img/7/3.png',
//	'asset/img/8/1.png',
//	'asset/img/8/2.png',
//	'asset/img/8/3.png',
//	'asset/img/8/4.png',
//	'asset/img/8/5.png',
//	'asset/img/8/last1.png',
//	'asset/img/8/last2.png',
//	'asset/img/8/last3.png',
	'asset/img/9/1.png',
	'asset/img/9/2.png',
	'asset/img/9/3.png',
	'asset/img/9/4.png',
	'asset/img/9/5.png',
	'asset/img/9/6.png',
	'asset/img/9/7.png',
	'asset/img/9/8.png',
	'asset/img/10/1.png',
	'asset/img/10/2.png',
	'asset/img/10/3.png',
	'asset/img/10/bg.png',
	'asset/img/10/light.png',
	'asset/img/11/1.png',
	'asset/img/11/3.png',
	'asset/img/11/float1.png',
	'asset/img/11/float2.png',
	'asset/img/11/float3.png'
], function() {
	var winH = $(window).outerHeight();
	var fixH = 1180;
//	var fixH = 1334 - 126;
	if (winH <= fixH) {
		$(".wrap").css("height", fixH)
	} else {
		$(".wrap").css("height", '100%')
	}
	init()
});

//模拟alert
var str, str2, str3;

function alert(txt) {
	str = '<div class="alert">';
	str += '<div class="alertInner">';
	str += '<h2>';
	str2 = '</h2>';
	str2 += '<a href="javascript:;">好</a>';
	str2 += '</div></div>';
	str3 = str + txt + str2;
	$("body").append(str3);
	var wh = $(window).height()
	var thisH = $(".alertInner").height()
	$(".alertInner").css("top", (wh - thisH) / 2)
	$(".alert a").on("click", function() {
		$(this).parent().parent().remove();
	})
}

function init() {
	numToimg();
	//跳页预览
	var page = parseInt(GetQueryString("p"));

	switch (page) {
		case 1:
			p1();
			break;
		case 2:
			p2();
			break;
		case 3:
			p3();
			break;
		case 4:
			p4();
			break;
		case 5:
			p5();
			break;
		case 6:
			p6();
			break;
		case 7:
			p7();
			break;
		case 8:
			p8();
			break;
		case 9:
			p9();
			break;
		case 10:
			p10();
			break;
		case 11:
			p11();
			break;
		default:
			p1();
	}
	
	//调试弹窗用
	var f = parseInt(GetQueryString("f"));

	switch (f) {
		case 1:
			$(".p11 .btn input").attr("data-url",1)
			break;
		case 2:
			$(".p11 .btn input").attr("data-url",2)
			break;
		case 3:
			$(".p11 .btn input").attr("data-url",3)
			break;
	}
	
}


function p1() {
//	switchMusic(0)
	$(".wrap>div").hide();
	$(".p1").show();
	TweenLite.set([$(".p1 .logo2")], {
		transformPerspective: 800
	});
	var p1 = new TimelineMax();
	p1.fromTo($(".p1"),1,{autoAlpha:0},{autoAlpha:1})
	.fromTo($(".p1 .txt img:eq(0)"),1,{opacity:0},{opacity:1})
	.fromTo($(".p1 .txt img:eq(1)"),1,{opacity:0},{opacity:1},'-=0.5')
	.fromTo($(".p1 .logo1"),1,{autoAlpha:0},{autoAlpha:1},'-=1')
	.fromTo($(".p1 .txt img:eq(2)"),1,{opacity:0,y:-100},{opacity:1,y:0},2)
	.fromTo($(".p1 .txt img:eq(2)"),1,{y:0},{y:-20,yoyo:true,repeat:-1,ease:Linear.easeNone})
	.fromTo($(".p1 .txt img:eq(3)"),1,{opacity:0,x:-100},{opacity:1,x:0},2.5)
	.fromTo($(".p1 .txt img:eq(3)"),1,{y:0},{y:-20,yoyo:true,repeat:-1,ease:Linear.easeNone},0)
	.fromTo($(".p1 .txt img:eq(4)"),1,{opacity:0,x:-100},{opacity:1,x:0},3)
	.fromTo($(".p1 .txt img:eq(4)"),1,{y:0},{y:-20,yoyo:true,repeat:-1,ease:Linear.easeNone},0)
	.fromTo($(".p1 .logo2"),1,{autoAlpha:0},{autoAlpha:1},3)
	.fromTo($(".p1 .logo3"),1,{autoAlpha:0},{autoAlpha:1},3)
	.fromTo($(".p1 .logo2"),2,{rotationY:"0",transformOrigin:"center center",autoAlpha:0},{rotationY:"360deg",autoAlpha:1},4)
	.fromTo($(".p1 .logo3"),2,{rotationY:"0",transformOrigin:"center center",autoAlpha:0},{rotationY:"360deg",autoAlpha:1},4)
	.fromTo($(".p1 .swipeBox img").eq(0),1,{x:0},{x:0},3)
	.fromTo($(".p1 .swipeBox img").eq(2),1,{opacity:1},{opacity:1},3)
	.fromTo($(".p1 .swipeBox img").eq(3),0.2,{opacity:0},{opacity:1,repeat:-1,yoyo:true},3)
	.fromTo($(".p1 .swipeBox"),1,{opacity:0,x:-750},{opacity:1,x:0},3)
}

$(".p1 .swipeBox").swipe({
	swipeRight: function(event, direction, distance, duration, fingerCount) {
		var swipeTl=new TimelineMax({
			onComplete:p2
		});
		swipeTl.fromTo($(this).find('img').eq(0),0.5,{x:0},{x:420})
		.fromTo([$(this).find('img').eq(2),$(this).find('img').eq(3)],0.5,{opacity:1},{opacity:0},'-=0.5')
	}
})

function p2() {
	$(".wrap>div").hide();
	$(".p2").show();
	var p2 = new TimelineMax();
	//****************	加载重置y *********************
	p2.fromTo($(".p2"),1,{autoAlpha:0,y:0},{autoAlpha:1,y:0})
	.fromTo($(".p2 .animate img:eq(0)"),1,{x:750},{x:0})
	.fromTo($(".p2 .animate img:eq(1)"),1,{y:280,opacity:0},{y:0,opacity:1},1.5)
//	.fromTo($(".p2 .animate img:eq(1)"),1,{rotation:"-10deg"},{rotation:"10deg",yoyo:true,repeat:-1,ease:Linear.easeNone},0)
	.fromTo($(".p2 .animate img:eq(2)"),1,{x:-750},{x:0},2)
	.fromTo($(".p2 .animate img:eq(3)"),1,{x:750},{x:0},2.5)
	.fromTo($(".p2 .animate img:eq(4)"),1,{opacity:0},{opacity:1},4)
	.fromTo($(".p2 .animate img:eq(4)"),1,{rotation:"-15deg"},{rotation:"15deg",yoyo:true,repeat:-1,ease:Linear.easeNone},0)
	.fromTo($(".p2 .animate img:eq(5)"),1,{opacity:0},{opacity:1},4)
	.fromTo($(".p2 .animate img:eq(5)"),1,{rotation:"-15deg"},{rotation:"15deg",yoyo:true,repeat:-1,ease:Linear.easeNone},0)
	.fromTo($(".p2 .animate img:eq(6)"),1,{opacity:0},{opacity:1},4)
	.fromTo($(".p2 .animate img:eq(6)"),1,{rotation:"-15deg"},{rotation:"15deg",yoyo:true,repeat:-1,ease:Linear.easeNone},0)
	.fromTo($(".p2 .animate img:eq(7)"),1,{opacity:0},{opacity:1},4)
	.fromTo($(".p2 .animate img:eq(7)"),1,{rotation:"-15deg"},{rotation:"15deg",yoyo:true,repeat:-1,ease:Linear.easeNone},0)
	.fromTo($(".p2 .animate img:eq(8)"),1,{opacity:0},{opacity:1},4)
	.fromTo($(".p2 .animate img:eq(8)"),1,{rotation:"-15deg"},{rotation:"15deg",yoyo:true,repeat:-1,ease:Linear.easeNone},0)
	.fromTo($(".p2 .animate img:eq(9)"),1,{opacity:0},{opacity:1},4)
	.fromTo($(".p2 .animate img:eq(9)"),1,{rotation:"-15deg"},{rotation:"15deg",yoyo:true,repeat:-1,ease:Linear.easeNone},0)
	.fromTo($(".p2 .swipeBox img").eq(0),1,{x:0},{x:0},3)
	.fromTo($(".p2 .swipeBox img").eq(2),1,{opacity:1},{opacity:1},3)
	.fromTo($(".p2 .swipeBox img").eq(3),0.2,{opacity:0},{opacity:1,repeat:-1,yoyo:true},3)
	.fromTo($(".p2 .swipeBox"),1,{opacity:0,x:-750},{opacity:1,x:0},3)
	
}
$(".p2 .swipeBox").swipe({
	swipeRight: function(event, direction, distance, duration, fingerCount) {
		var swipeTl=new TimelineMax({
			onComplete:p3
		});
		swipeTl.fromTo($(this).find('img').eq(0),0.5,{x:0},{x:420})
		.fromTo([$(this).find('img').eq(2),$(this).find('img').eq(3)],0.5,{opacity:1},{opacity:0},'-=0.5')
	}
})
$(".p2").swipe({
	swipeDown: function(event, direction, distance, duration, fingerCount) {
		var swipeTl=new TimelineMax({
			onComplete:p1
		});
		swipeTl.fromTo($(this),0.5,{y:0},{y:1500})
	}
})
function p3() {
	$(".wrap>div").hide();
	$(".p3").show();
	var p3 = new TimelineMax({
			//onComplete:p4
	});
	
	p3.fromTo($(".p3"),1,{autoAlpha:0,y:0},{autoAlpha:1,y:0})
	p3.fromTo($(".p3 .animate img:eq(3)"),0.5,{x:-750},{x:0})
	p3.fromTo($(".p3 .animate img:eq(1)"),0.5,{x:750},{x:0})
	p3.fromTo($(".p3 .animate img:eq(0)"),0.5,{x:-750},{x:0},'-=0.25')
	p3.fromTo($(".p3 .animate img:eq(2)"),0.5,{opacity:0},{opacity:1})
	p3.fromTo($(".p3 .animate img:eq(4)"),0.5,{x:770},{x:0},'-=0.5')
	p3.fromTo($(".p3 .arr"),1,{y:300,opacity:0},{y:-50,opacity:1})
	p3.fromTo($(".p3 .arr"),0.5,{y:-50},{y:0,repeat:-1,yoyo:true,ease:Linear.easeNone})
}
$(".p3").swipe({
	swipeDown: function(event, direction, distance, duration, fingerCount) {
		var swipeTl=new TimelineMax({
			onComplete:p2
		});
		swipeTl.fromTo($(this),0.5,{y:0},{y:1500})
	},
	swipeUp: function(event, direction, distance, duration, fingerCount) {
		var swipeUp=new TimelineMax({
			onComplete:p4
		});
		swipeUp.fromTo($(this),0.5,{y:0},{y:-1500})
	}
})

function p4(){
	$(".wrap>div").hide();
	$(".p4").show();
	var p4 = new TimelineMax();
	p4.fromTo($(".p4"),1,{autoAlpha:0,y:0},{autoAlpha:1,y:0})
	p4.fromTo($(".p4 .animate img:eq(0),.p4 .animate img:eq(1)"),1,{autoAlpha:0},{autoAlpha:1})
	p4.fromTo($(".p4 .animate img:eq(2)"),1,{x:-750},{x:0})
	p4.fromTo($(".p4 .animate img:eq(1)"),1,{x:0,y:0,rotation:0},{x:200,y:-380,rotation:'30deg'},'-=0.5')
	p4.fromTo($(".p4 .animate img:eq(3)"),1,{x:-750},{x:0},'-=0.5')
	p4.fromTo($(".p4 .animate img:eq(4)"),1,{x:800},{x:0})
	p4.fromTo($(".p4 .swipeBox img").eq(0),1,{x:0},{x:0},4.5)
	p4.fromTo($(".p4 .swipeBox img").eq(2),1,{opacity:1},{opacity:1},4.5)	
	p4.fromTo($(".p4 .swipeBox img").eq(3),0.2,{opacity:0},{opacity:1,repeat:-1,yoyo:true},4.5)
	p4.fromTo($(".p4 .swipeBox"),1,{opacity:0,x:-750},{opacity:1,x:0},4.5)
}
$(".p4").swipe({
	swipeDown: function(event, direction, distance, duration, fingerCount) {
		var swipeTl=new TimelineMax({
			onComplete:p3
		});
		swipeTl.fromTo($(this),0.5,{y:0},{y:1500})
	}
})
$(".p4 .swipeBox").swipe({
	swipeRight: function(event, direction, distance, duration, fingerCount) {
		var swipeTl=new TimelineMax({
			onComplete:p5
		});
		swipeTl.fromTo($(this).find('img').eq(0),0.5,{x:0},{x:420})
		.fromTo([$(this).find('img').eq(2),$(this).find('img').eq(3)],0.5,{opacity:1},{opacity:0},'-=0.5')
	}
})

function p5(){
	$(".wrap>div").hide();
	$(".p5").show();
	var p5 = new TimelineMax({
			//onComplete:p6
	});
	p5.fromTo($(".p5"),1,{autoAlpha:0,y:0},{autoAlpha:1,y:0})
	.fromTo($(".p5 .animate img:eq(0)"),1,{x:-750},{x:0,ease:Back.easeInOut})
	.fromTo($(".p5 .animate img:eq(1)"),1,{opacity:0,scale:0,transformOrigin:"bottom center",x:150},{opacity:1,scale:1,x:0})
	.to($(".p5 .animate img:eq(1)"),1,{x:-200,y:-120,opacity:0.6,scale:0.9})
	.fromTo($(".p5 .animate img:eq(2)"),1,{opacity:0,scale:0,transformOrigin:"bottom center",x:150},{opacity:1,scale:1,x:0},3.0)
	.fromTo($(".p5 .animate img:eq(3)"),1,{x:750},{x:0})
	.fromTo($(".p5 .animate img:eq(4)"),1,{x:-750},{x:0},'-=1')
	.fromTo($(".p5 .animate img:eq(5)"),1,{x:750},{x:0})
	.fromTo($(".p5 .arr"),1,{y:300,opacity:0},{y:-50,opacity:1})
	.fromTo($(".p5 .arr"),0.5,{y:-50},{y:0,repeat:-1,yoyo:true,ease:Linear.easeNone})
}
$(".p5").swipe({
	swipeDown: function(event, direction, distance, duration, fingerCount) {
		var swipeTl=new TimelineMax({
			onComplete:p4
		});
		swipeTl.fromTo($(this),0.5,{y:0},{y:1500})
	},
	swipeUp: function(event, direction, distance, duration, fingerCount) {
		var swipeUp=new TimelineMax({
			onComplete:p6
		});
		swipeUp.fromTo($(this),0.5,{y:0},{y:-1500})
	}
})

function p6(){
	$(".wrap>div").hide();
	$(".p6").show();
	var p6 = new TimelineMax();
	p6.fromTo($(".p6"),1,{autoAlpha:0,y:0},{autoAlpha:1,y:0})
	.fromTo($(".p6 .animate img:eq(0)"),1,{x:750},{x:0,ease:Back.easeInOut})
	.fromTo($(".p6 .animate img:eq(1)"),1,{opacity:0,rotation:"-15deg"},{opacity:1,rotation:0,ease:Back.easeInOut})
	.fromTo($(".p6 .animate img:eq(2)"),1,{opacity:0,y:100},{opacity:1,y:0,ease:Back.easeInOut})
	.fromTo($(".p6 .animate img:eq(3)"),1,{x:-750},{x:.0,ease:Linear.easeNone},'-=1')
	.fromTo($(".p6 .animate img:eq(4)"),1,{x:-750},{x:.0})
	.fromTo($(".p6 .swipeBox img").eq(0),1,{x:0},{x:0},5)
	.fromTo($(".p6 .swipeBox img").eq(2),1,{opacity:1},{opacity:1},5)
	.fromTo($(".p6 .swipeBox img").eq(3),0.2,{opacity:0},{opacity:1,repeat:-1,yoyo:true},4.5)
	.fromTo($(".p6 .swipeBox"),1,{opacity:0,x:-750},{opacity:1,x:0},5)
}
$(".p6").swipe({
	swipeDown: function(event, direction, distance, duration, fingerCount) {
		var swipeTl=new TimelineMax({
			onComplete:p5
		});
		swipeTl.fromTo($(this),0.5,{y:0},{y:1500})
	}
})
$(".p6 .swipeBox").swipe({
	swipeRight: function(event, direction, distance, duration, fingerCount) {
		var swipeTl=new TimelineMax({
			onComplete:p7
		});
		swipeTl.fromTo($(this).find('img').eq(0),0.5,{x:0},{x:420})
		.fromTo([$(this).find('img').eq(2),$(this).find('img').eq(3)],0.5,{opacity:1},{opacity:0},'-=0.5')
	}
})
//function p7(){
//	$(".wrap>div").hide();
//	$(".p7").show();
//	var p7 = new TimelineMax({
//			//onComplete:p8
//	});
//	p7.fromTo($(".p7"),1,{autoAlpha:0,y:0},{autoAlpha:1,y:0})
//	.fromTo($(".p7 .animate img:eq(0)"),1,{x:-800},{x:0,ease:Back.easeInOut})
//	.fromTo($(".p7 .animate img:eq(1)"),1,{x:-800},{x:0,ease:Back.easeInOut},'-=0.3')
//	.fromTo($(".p7 .animate img:eq(2)"),1,{x:-800},{x:0,ease:Back.easeInOut},'-=0.3')
//	.fromTo($(".p7 .arr"),1,{y:300,opacity:0},{y:-50,opacity:1})
//	.fromTo($(".p7 .arr"),0.5,{y:-50},{y:0,repeat:-1,yoyo:true,ease:Linear.easeNone})
//}

//function p8(){
//	$(".wrap>div").hide();
//	$(".p8").show();
//	var p8 = new TimelineMax();
//	p8.fromTo($(".p8"),1,{autoAlpha:0},{autoAlpha:1})
//	.fromTo($(".p8 .animate img:eq(0)"),1,{x:-800},{x:0,ease:Back.easeInOut})
//	.fromTo($(".p8 .animate img:eq(2)"),1,{opacity:0},{opacity:1})
//	.fromTo($(".p8 .animate img:eq(1)"),1,{x:-800},{x:0},'-=1')
//	.fromTo($(".p8 .animate img:eq(3)"),1,{opacity:0,x:-100,y:100},{opacity:1,x:0,y:0})
//	.fromTo($(".p8 .animate img:eq(4)"),0.5,{y:-400},{y:0},'-=0.5')
//	.fromTo($(".p8 .swipeBox"),1,{opacity:0,x:-750},{opacity:1,x:0},4)
//}
//$(".p8 .swipeBox").swipe({
//	swipeRight: function(event, direction, distance, duration, fingerCount) {
//		var swipeTl=new TimelineMax({
//			onComplete:p9
//		});
//		swipeTl.fromTo($(this).find('img').eq(0),0.5,{x:0},{x:420})
//		.fromTo($(this).find('img').eq(2),0.5,{opacity:1},{opacity:0},'-=0.5')
//	}
//})
//function p9(){
//	$(".wrap>div").hide();
//	$(".p9").show();
//	var p9 = new TimelineMax();
//	var hasfloat=1;
//	if (hasfloat){
//		p9.fromTo($(".p9"),1,{autoAlpha:0},{autoAlpha:1})
//		.fromTo($(".p9 .animate img:eq(0)"),1,{x:800},{x:0})
//		.fromTo($(".p9 .animate img:eq(1)"),1,{x:-800},{x:0})
//		.fromTo($(".p9 .animate img:eq(2)"),1,{x:-800},{x:0})
//		.fromTo($(".p9 .mask,.p9 .float"),1,{opacity:0},{opacity:1,delay:1.5})
//		p9.timeScale(1.5)
//	}else{
//		p9.fromTo($(".p9"),1,{autoAlpha:0},{autoAlpha:1})
//		.fromTo($(".p9 .animate img:eq(0)"),1,{x:800},{x:0})
//		.fromTo($(".p9 .animate img:eq(1)"),1,{x:-800},{x:0})
//		.fromTo($(".p9 .animate img:eq(2)"),1,{x:-800},{x:0})
//		.fromTo($(".p9 .mask,.p9 .float"),1,{opacity:0},{opacity:0,delay:1.5})
//		p9.timeScale(1.5)
//		setTimeout(function(){
//			p10()
//		},4000)
//	}
//	
//	
//	$(".p9 .btnGroup span").click(function(){
//		var $url=$(this).data("url");
//		if ($url=='erweima'){
//			p10()
//		}
//		if ($url=='baoming'){
//			p11()
//		}
//	})
//}


function p10(){
	$(".wrap>div").hide();
	$(".p10 .mask,.p10 .share").hide();
	$(".p10").show();
	var p10 = new TimelineMax();
	p10.fromTo($(".p10"),1,{autoAlpha:0},{autoAlpha:1})
	$(".p10 .btnGroup span").click(function(){
		var $url=$(this).data("url")
		if ($url=="baoming"){
			p11()
		}
		if ($url=="share"){
			$(".p10 .mask,.p10 .share").show();
		}
	})
	$(".p10 .mask").click(function(){
		$(this).hide();
		$(".p10 .share").hide();
	})
}

function p11(){
	$(".wrap>div").hide();
	$(".p11").show();
	$(".p11 .mask,.p11 .float").hide();
	var p11 = new TimelineMax();
	p11.fromTo($(".p11"),1,{autoAlpha:0},{autoAlpha:1})
	
	$(".p11 .btn input").click(function(){
		var $url=$(this).data("url")
		switch($url){
			case 1:
				$(".p11 .float").hide();
				$(".p11 .mask").hide();
				$(".p11 .float1").show();
				$(".p11 .mask").show();
			break;
			case 2:
				$(".p11 .float").hide();
				$(".p11 .mask").hide();
				$(".p11 .float2").show();
				$(".p11 .mask").show();
			break;
			case 3:
				$(".p11 .float").hide();
				$(".p11 .mask").hide();
				$(".p11 .float3").show();
				$(".p11 .mask").show();
			break;
		}
	})
	
	$(".p11 .float1 span").click(function(){
		p10();
	})
	$(".p11 .float2 span").click(function(){
		$(".p11 .share").show();
	})
	$(".p11 .float3 input:submit").click(function(){
		p10();
	})
//	$(".p11 .float4 input:submit").click(function(){
//		alert ("已经领取保险")
//	})
}

//function switchMusic(id) {
//	if (id) {
//		$('#mc_play audio').get(0).pause();
//		$("#mc_play audio").attr("src", "asset/plug/music/special.mp3");
//		$('#mc_play audio').get(0).play();
//	} else {
//		$('#mc_play audio').get(0).pause();
//		$("#mc_play audio").attr("src", "asset/plug/music/bg.mp3");
//		$('#mc_play audio').get(0).play();
//	}
//}