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

//重新计算cloud位置
function resetCloud() {
	$(".cloud img").each(function() {
		var thisT = parseInt($(this).css("top"));
		$(this).css("top", thisT - 46 + "px")
	})
}

//跳到封面状态
function goUrl() {
	$(".ok").each(function() {
		var status = $(this).hasClass("ok-ex1");
		if (status) {
			$(this).find("img").eq(1).click(function() {
				step5();
			})
		} else {
			$(this).find("img").eq(1).click(function() {
				var url = $(this).data("url")
				window.location.href = url;
			})
		}
	})
}

//随机图像
function randomImg(id, obj) {
	id--;
	//11
	var cat_arr = ["asset/img/random/1.jpg", "asset/img/random/2.jpg", "asset/img/random/3.jpg", "asset/img/random/4.jpg", "asset/img/random/5.jpg", "asset/img/random/6.jpg", "asset/img/random/7.jpg", "asset/img/random/8.jpg", "asset/img/random/9.jpg", "asset/img/random/10.jpg", "asset/img/random/11.jpg"]
	//30
	var book_arr = ["asset/img/random/11.jpg", "asset/img/random/12.jpg", "asset/img/random/13.jpg", "asset/img/random/14.jpg", "asset/img/random/15.jpg", "asset/img/random/16.jpg", "asset/img/random/17.jpg", "asset/img/random/18.jpg", "asset/img/random/19.jpg", "asset/img/random/20.jpg", "asset/img/random/21.jpg", "asset/img/random/22.jpg", "asset/img/random/23.jpg", "asset/img/random/24.jpg", "asset/img/random/25.jpg", "asset/img/random/26.jpg", "asset/img/random/27.jpg", "asset/img/random/28.jpg", "asset/img/random/29.jpg", "asset/img/random/30.jpg", "asset/img/random/31.jpg", "asset/img/random/32.jpg", "asset/img/random/33.jpg", "asset/img/random/34.jpg", "asset/img/random/35.jpg", "asset/img/random/36.jpg", "asset/img/random/37.jpg", "asset/img/random/38.jpg","asset/img/random/39.jpg", "asset/img/random/40.jpg"]
	
	//非书类
	var this_cat = cat_arr[id];

	cat_arr.sort(function() {
		return Math.random() - 0.5;
	});
	var random_len = cat_arr.length;
	var i = 0;
	var timer = setInterval(function() {
		obj.attr("src", cat_arr[i])
		i++;
		if (i >= random_len) {
			clearInterval(timer);
			if (id!=random_len-1) {
				obj.attr("src", this_cat)
			} else {
				obj.attr("src", book_arr[parseInt(Math.random() * 30)])
			}
		}
	}, 300)
}

//文字转图片
function numToimg() {
	$(".numToimg").each(function() {
		var num = String($(this).data("num")).split('')
		var numL = num.length;
		var numImg = "";
		for (var i = 0; i < numL; i++) {
			numImg += '<img src="asset/img/3/' + num[i] + '.png"/>'
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
	'asset/img/cover/bg.png',
	'asset/img/3/0.png',
	'asset/img/3/1.png',
	'asset/img/3/2.png',
	'asset/img/3/3.png',
	'asset/img/3/4.png',
	'asset/img/3/5.png',
	'asset/img/3/6.png',
	'asset/img/3/7.png',
	'asset/img/3/8.png',
	'asset/img/3/9.png',
	'asset/img/3/bg1.png',
	'asset/img/3/btn.png',
	'asset/img/3/btn1.png',
	'asset/img/3/ok.png',
	'asset/img/3/p1.png',
	'asset/img/3/t1.png',
	'asset/img/3/t2.png',
	'asset/img/3/title.png',
	'asset/img/5/btn.png',
	'asset/img/5/kuang.png',
	'asset/img/5/radio_off.png',
	'asset/img/5/radio_on.png',
	'asset/img/5/title.png',
	'asset/img/5/txt1.png',
	'asset/img/5/txt2.png',
	'asset/img/5/txt3.png',
	'asset/img/5/txt4.png',
	'asset/img/5/txt5.png',
	'asset/img/6/1.png',
	'asset/img/6/2.png',
	'asset/img/6/arr.png',
	'asset/img/6/btn.png',
	'asset/img/6/kuang.png',
	'asset/img/7/bg.jpg',
	'asset/img/7/bg-zhengshu.jpg',
	'asset/img/7/btn1.png',
	'asset/img/7/btn2.png',
	'asset/img/7/share.png'
], function() {
	var winH = $(window).outerHeight();
	//var fixH = 1180;
	var fixH = 1334 - 126;
	if (winH <= fixH) {
		$(".wrap").css("height", fixH)
	} else {
		$(".wrap").css("height", '100%')
	}
	init()
});

function init() {
	resetCloud();
	goUrl();
	numToimg();

	//跳页预览
	var stepStatus = parseInt(GetQueryString("step"));

	switch (stepStatus) {
		case 0:
			cover();
			break;
		case 1:
			step1();
			break;
		case 2:
			step2();
			break;
		case 3:
			step3();
			break;
		case 4:
			step5();
			break;
		case 5:
			step5();
			break;
		case 6:
			step6();
			break;
		case 7:
			step7();
			break;
	}

	//封面状态

	var coverStatus = parseInt(GetQueryString("cover"));
	switch (coverStatus) {
		case 0:
			cover();
			$(".cover .lighthouse span:eq(0)").addClass("shan");
			break;
		case 1:
			$(".cover .lighthouse span:eq(0) img:eq(1)").remove();
			$(".cover .lighthouse span:eq(0) b").show();
			$(".cover .lighthouse span:eq(1)").addClass("shan");
			cover(1);
			break;
		case 2:
			$(".cover .lighthouse span:eq(0) img:eq(1)").remove();
			$(".cover .lighthouse span:eq(1) img:eq(1)").remove();
			$(".cover .lighthouse span:eq(0) b").show();
			$(".cover .lighthouse span:eq(1) b").show();
			$(".cover .lighthouse span:eq(2)").addClass("shan");
			cover(2);
			break;
	}

	//证书按钮状态

	var cert = parseInt(GetQueryString("cert"));
	switch (cert) {
		case 0:
			$(".step7 .btn").hide();
			$(".step7 .btn:eq(0)").show();
			break;
		case 1:
			$(".step7 .btn").hide();
			$(".step7 .btn:eq(1)").show();
			break;
	}
}

function cover(num) {
	$(".cover,.step1,.step2,.step3,.step4,.step5,.step6,.step7").hide();
	$(".cover").show();
	var cover = new TimelineMax();
	cover.set($(".cover .lighthouse span"), {
		zIndex: 2
	})
	cover.set($(".cover .lighthouse span:eq(2)"), {
			zIndex: 4
		})
		.from($(".cover"), 1, {
			autoAlpha: 0
		})
		.from($(".cover .earth"), 1, {
			y: 1500,
			autoAlpha: 0,
			ease: Back.easeInOut
		})
		.from($(".cover .title img:eq(0)"), 0.5, {
			x: -750,
			ease: Back.easeInOut
		})
		.from($(".cover .title img:eq(1)"), 0.5, {
			x: 750,
			ease: Back.easeInOut
		}, '-=0.5')
		.from($(".cover .title img:eq(2)"), 0.5, {
			y: -750,
			ease: Back.easeInOut
		})
		.from($(".cover .cloud img:eq(0)"), 2, {
			left: 750,
			autoAlpha: 0
		})
		.from($(".cover .cloud img:eq(0)"), 5, {
			x: 100,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		})
		.from($(".cover .cloud img:eq(1)"), 2, {
			left: -750,
			autoAlpha: 0
		}, 3)
		.from($(".cover .cloud img:eq(1)"), 5, {
			x: -50,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 3)
		.from($(".cover .cloud img:eq(2)"), 2, {
			autoAlpha: 0
		}, 3)
		.from($(".cover .cloud img:eq(3)"), 2, {
			left: -750,
			autoAlpha: 0
		}, 3)
		.from($(".cover .cloud img:eq(3)"), 4, {
			x: -50,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 3)
		.from($(".cover .cloud img:eq(4)"), 2, {
			left: 750,
			autoAlpha: 0
		}, 4)
		.from($(".cover .cloud img:eq(4)"), 5, {
			x: 100,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 4)
		.from($(".cover .cloud img:eq(5)"), 2, {
			autoAlpha: 0
		}, 3)
		.from($(".cover .cloud img:eq(6)"), 2, {
			autoAlpha: 0
		}, 3)
		.from($(".cover .cloud img:eq(7)"), 2, {
			autoAlpha: 0
		}, 3)
		.from($(".cover .lighthouse span:eq(0)"), 0.5, {
			y: 100,
			autoAlpha: 0
		}, 4)
		.from($(".cover .lighthouse span:eq(0)"), 1.5, {
			//scale: 1.1,
			top: '-=20',
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 4)
		.from($(".cover .lighthouse span:eq(1)"), 0.5, {
			y: 100,
			autoAlpha: 0
		}, 4.25)
		.from($(".cover .lighthouse span:eq(1)"), 1.5, {
			top: '-=20',
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 4.25)
		.from($(".cover .lighthouse span:eq(2)"), 0.5, {
			y: 100,
			autoAlpha: 0
		}, 4.5)
		.from($(".cover .lighthouse span:eq(2)"), 1.5, {
			top: '-=20',
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 4.5)
		.from($(".ft-tx"), 0.5, {
			y: 300,
			autoAlpha: 0,
		}, 5)
		.from($(".cover .lighthouse span b"), 2, {
			scale: 0.8,
			autoAlpha: 0.5
		}, 5)
		.from($(".cover .lighthouse span b"), 1, {
			scale: 1.2,
			autoAlpha: 1,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 5)

	num ? cover.play(3) : cover.play(0);

	switch (num) {
		case 1:
			$(".cover .lighthouse span:eq(0)").off();
			$(".cover .lighthouse span:eq(1)").click(function() {
				step2()
			});
			break;
		case 2:
			$(".cover .lighthouse span:eq(0)").off();
			$(".cover .lighthouse span:eq(1)").off();
			$(".cover .lighthouse span:eq(2)").click(function() {
				step3()
			});
			break;
		default:
			$(".cover .lighthouse span:eq(0)").click(function() {
				step1();
			})
	}

}

function step1() {
	$(".cover,.step1,.step2,.step3,.step4,.step5,.step6,.step7").hide();
	$(".step1").show();
	var step1 = new TimelineMax();
	step1.staggerFrom($(".step1 .lighthouse span"), 1, {
			y: -200,
			autoAlpha: 0
		}, 0.25)
		.from($(".step1 .txt"), 1, {
			y: 400,
			autoAlpha: 0
		})
		.to($(".step1 .txt"), 1, {
			y: 100,
			autoAlpha: 0,
			delay: 2
		})
		.from($(".cover .cloud img:eq(0)"), 2, {
			left: 750,
			autoAlpha: 0
		})
		.from($(".step1 .cloud img:eq(0)"), 5, {
			x: 100,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		})
		.from($(".step1 .cloud img:eq(1)"), 2, {
			left: -750,
			autoAlpha: 0
		}, 3)
		.from($(".step1 .cloud img:eq(1)"), 5, {
			x: -50,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 3)
		.from($(".step1 .cloud img:eq(2)"), 2, {
			autoAlpha: 0
		}, 3)
		.from($(".step1 .cloud img:eq(3)"), 2, {
			left: -750,
			autoAlpha: 0
		}, 3)
		.from($(".step1 .cloud img:eq(3)"), 4, {
			x: -50,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 3)
		.from($(".step1 .cloud img:eq(4)"), 2, {
			left: 750,
			autoAlpha: 0
		}, 4)
		.from($(".step1 .cloud img:eq(4)"), 5, {
			x: 100,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 4)
		.from($(".step1 .cloud img:eq(5)"), 2, {
			autoAlpha: 0
		}, 3)
		.from($(".step1 .cloud img:eq(6)"), 2, {
			autoAlpha: 0
		}, 3)
		.from($(".step1 .cloud img:eq(7)"), 2, {
			autoAlpha: 0
		}, 3)
		.from($(".step1 .cloud img:eq(8)"), 2, {
			left: 750,
			autoAlpha: 0
		}, 4.5)
		.from($(".step1 .cloud img:eq(8)"), 5, {
			x: 100,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 4.5)
		.from($(".step1 .drag span:eq(0)"), 1, {
			x: -750,
			autoAlpha: 0
		}, 5)
		.from($(".step1 .drag span:eq(1)"), 1, {
			x: 750,
			autoAlpha: 0
		}, 5)
		.from($(".step1 .drag span:eq(2)"), 1, {
			x: -750,
			autoAlpha: 0
		}, 5)
		.to($(".step1 .drag span:eq(0) img:eq(1)"), 0.5, {
			x: 50,
			autoAlpha: 0,
			repeat: -1
		}, 2)
		.to($(".step1 .drag span:eq(1) img:eq(1)"), 0.5, {
			x: -50,
			autoAlpha: 0,
			repeat: -1
		}, 2)
		.to($(".step1 .drag span:eq(2) img:eq(1)"), 0.5, {
			x: 50,
			autoAlpha: 0,
			repeat: -1
		}, 2)

	var clickCount = 0;

	function countClick() {
		if (clickCount >= 3) {
			setTimeout(function() {
				$(".step1 .ok").fadeIn()
			}, 5000)
		}
	}

	$(".step1 .drag span").swipe({
		swipe: function(event, direction, distance, duration, fingerCount) {
			var idx = $(this).index();
			if (direction == "right" && idx == 0 || direction == "right" && idx == 2) {
				TweenLite.to($(this), 1, {
					x: 750
				})
				clickCount++
				TweenLite.to($(".step1 .mask img").eq(idx), 1, {
					autoAlpha: 0,
					delay: 1
				})
				countClick()
				TweenLite.to($(".step1 .dragTxt img").eq(idx), 1, {
					autoAlpha: 1,
					delay: 2
				})
			}
			if (direction == "left" && idx == 1) {
				TweenLite.to($(this), 1, {
					x: -750
				})
				clickCount++
				TweenLite.to($(".step1 .mask img").eq(idx), 1, {
					autoAlpha: 0,
					delay: 1
				})
				countClick()
				TweenLite.to($(".step1 .dragTxt img").eq(idx), 1, {
					autoAlpha: 1,
					delay: 2
				})
			}
		}
	})
}

function step2() {
	$(".cover,.step1,.step2,.step3,.step4,.step5,.step6,.step7").hide();
	$(".step2").show();
	var step2 = new TimelineMax();
	step2.staggerFrom($(".step2 .lighthouse span"), 1, {
			y: -200,
			autoAlpha: 0
		}, 0.25)
		.from($(".step2 .title"), 1, {
			y: 400,
			autoAlpha: 0
		})
		.from($(".step2 .kuang"), 1, {
			x: 750,
			autoAlpha: 0,
			ease: Back.easeInOut
		})
		.from($(".step2 .btn"), 1, {
			x: -100,
			autoAlpha: 0,
			ease: Back.easeInOut
		}, '-=0.5')
		.from($(".step2 .lighthouse span b"), 2, {
			scale: 0.8,
			autoAlpha: 0.5
		}, 1)
		.from($(".step2 .lighthouse span b"), 1, {
			scale: 1.2,
			autoAlpha: 1,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 1)
		.from($(".step2 .tips"), 1, {
			y: 100,
			autoAlpha: 0
		}, 3)

	$(".step2 .kuang input").click(function() {
		
		//这块作表单提交时，应先上传图片后在修改地址，然后才显示下面两条语句；
//		$(this).parent().find(".tx").show();
//		$(this).parent().find("b").show();
		//
		$(".step2 .tips").hide();
		$(".step2 .btn").show();
	})
	$(".step2 input.btn").click(function() {
		$(".step2 .ok").fadeIn();
	})
}

function step3() {
	$(".cover,.step1,.step2,.step3,.step4,.step5,.step6,.step7").hide();
	$(".step3").show();

	var step3 = new TimelineMax();
	step3.staggerFrom($(".step3 .lighthouse span"), 1, {
			y: -200,
			autoAlpha: 0
		}, 0.25)
		.from($(".step3 h2"), 1, {
			y: -100,
			autoAlpha: 0
		})
		.from($(".step3 h3"), 1, {
			y: -100,
			autoAlpha: 0
		})
		.from($(".step3 .pic"), 1, {
			autoAlpha: 0,
			scale: 0
		})
		.from($(".step3 .btn"), 1, {
			x: -750,
			ease: Back.easeInOut
		})
		.from($(".step3 .lighthouse span b"), 2, {
			scale: 0.8,
			autoAlpha: 0.5
		}, 1)
		.from($(".step3 .lighthouse span b"), 1, {
			scale: 1.2,
			autoAlpha: 1,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 1)

	$(".step3 .btn").click(function() {
		$(".step3 .ok").fadeIn()
	})
}

function step4() {
	$(".cover,.step1,.step2,.step3,.step4,.step5,.step6,.step7").hide();
	$(".step4").show();
	var step4 = new TimelineMax();
	step4.from($(".step4 h2"), 1, {
			scale: 3,
			autoAlpha: 0,
			ease: Back.easeInOut
		})
		.staggerFrom($(".step4 .lighthouse span"), 0.5, {
			y: -200,
			autoAlpha: 0
		}, 0.25)
		.from($(".step4 .txt"), 1, {
			scale: 3,
			autoAlpha: 0,
			ease: Back.easeInOut
		})
		.from($(".step4 .btn"), 1, {
			x: -750,
			autoAlpha: 0
		})
		.from($(".step4 .lighthouse span b"), 2, {
			scale: 0.8,
			autoAlpha: 0.5
		}, 1)
		.from($(".step4 .lighthouse span b"), 1, {
			scale: 1.2,
			autoAlpha: 1,
			repeat: -1,
			yoyo: true,
			ease: Linear.easeNone
		}, 1)
	$(".step4 .btn").click(function() {
		step5();
	})
}

function step5() {
	$(".cover,.step1,.step2,.step3,.step4,.step5,.step6,.step7").hide();
	$(".step5").show();
	var step5 = new TimelineMax();
	step5.from($(".step5 .kuang"), 1, {
			scale: 3,
			autoAlpha: 0,
			ease: Back.easeInOut
		})
		.from($(".step5 .btn"), 1, {
			scale: 3,
			autoAlpha: 0,
			ease: Back.easeInOut
		}, '-=0.5')
		.from($(".step5 .note"), 1, {
			y: 150,
			autoAlpha: 0,
			ease: Back.easeInOut
		}, '-=0.5')

	setTimeout(function() {
		randomImg(10, $(".randomImg img"))
	}, 1000)

	$(".step5 .btn").click(function() {
		step7();
	})
}

function step6() {
	$(".cover,.step1,.step2,.step3,.step4,.step5,.step6,.step7").hide();
	$(".step6").show();
	var step6 = new TimelineMax();
	step6.from($(".step6 .kuang"), 1, {
			scale: 3,
			autoAlpha: 0,
			ease: Back.easeInOut
		})
		.from($(".step6 .btn"), 1, {
			scale: 3,
			autoAlpha: 0,
			ease: Back.easeInOut
		}, '-=0.5')
	$(".step6 .btn").click(function() {
		step7();
	})
}

function step7() {
	$(".cover,.step1,.step2,.step3,.step4,.step5,.step6,.step7").hide();
	$(".step7").show();
	var step7 = new TimelineMax();
	step7.from($(".step7 .cert"), 1, {
			scale: 3,
			autoAlpha: 0,
			ease: Back.easeInOut
		})
		.from($(".step7 .btn"), 1, {
			scale: 3,
			autoAlpha: 0,
			ease: Back.easeInOut
		}, '-=0.5')
	$(".step7 .btn:eq(0) ").click(function() {
		$(".step7 .share,.step7 .heart").show();
		var heart = new TimelineMax();
		heart.from($(".step7 .heart"), 3, {
				scale: 2,
				x: -750,
				y: 1500,
				ease: Power2.easeInOut
			})
			.to($(".step7 .heart"), 0.5, {
				y: 50,
				repeat: -1,
				yoyo: true
			})
	})

}

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
	var wh=$(window).height()
	var thisH=$(".alertInner").height()
	$(".alertInner").css("top",(wh-thisH)/2)
	$(".alert a").on("click", function() {
		$(this).parent().parent().remove();
	})
}
