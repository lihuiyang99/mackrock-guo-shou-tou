function play_music() {
	if ($('#mc_play').hasClass('on')) {
		$('#mc_play audio').get(0).pause();
		$('#mc_play').attr('class', 'stop');
	} else {
		$('#mc_play audio').get(0).play();
		$('#mc_play').attr('class', 'on');
	}
	$('#music_play_filter').hide();
	event.stopPropagation(); //阻止冒泡 
}

function just_play(id) {
	$('#mc_play audio').get(0).play();
	$('#mc_play').attr('class', 'on');
	if (typeof(id) != 'undefined') {
		$('#music_play_filter').hide();
	}
	event.stopPropagation(); //阻止冒泡 
}

function is_weixn() {
	return false;
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}
var play_filter = $("#music_play_filter")
play_filter.on('click', function() {
	just_play(1);
});
play_filter.on('touchstart', function() {
	just_play(1);
});
play_filter.on('touchend', function() {
	just_play(1);
});
play_filter.on('touchmove', function() {
	just_play(1);
});
play_filter.on('mousedown', function() {
	just_play(1);
});
play_filter.on('mouseup', function() {
	just_play(1);
});
play_filter.on('mousemove', function() {
	just_play(1);
});
window.onload = function() {
	just_play();
//	if (!is_weixn()) {
//		just_play();
//	}
}