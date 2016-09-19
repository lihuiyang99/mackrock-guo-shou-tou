var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 750;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
	var version = parseFloat(RegExp.$1);
	if (version > 2.3) {
		document.write('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
	} else {
		document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
	}
} else {
	document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
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
