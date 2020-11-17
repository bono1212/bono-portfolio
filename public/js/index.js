var now = 0;
new Wheel(document, function (direction, e) {
	e.preventDefault();
	var pageY = e.pageY;
	var pageEnds = [];
	$(".page").each(function(i) {
		pageEnds[i] = $(this).offset().top + $(this).outerHeight();
	});

	console.log(pageEnds);

	for(var i=pageEnds.length - 1; i>0; i--) {
		if(pageY > pageEnds[i] && pageY < pageEnds[i-1]) {
			now = i;
			break;
		}
	}
	console.log(now);
	//now = $(target[0]).index();
	if (direction == 'up' && now > 0) {
		now--;
	}
	if (direction == 'down' && now < $(".page").length - 1) {
		now++;
	}
	pageAni();

	function pageAni() {
		if(now == 0) {
			$('.scroll-wrap .bar2').css('width', '100%');
			$('.scroll-wrap .bar1').css('width', '200%');
			$('.scroll-wrap .bar3').css('width', '100%');
			$('.scroll-wrap .bar4').css('width', '100%');
		}
		if(now == 1) {
			$('.page-1 .about-wrap .about-bg .number').css('animation-name', 'num');
			$('.page-1 .about-wrap .show-me').css('animation-name', 'show');
			$('.page-1 .about-wrap .about-small .txt').css('animation-name', 'txt');
			$('.page-1 .about-wrap .moon2').css('animation-name', 'Moon2');
			$('.page-1 .about-wrap .about-small ').css('animation-name', 'about');
			$('.scroll-wrap .bar2').css('width', '200%');
			$('.scroll-wrap .bar1').css('width', '100%');
			$('.scroll-wrap .bar3').css('width', '100%');
			$('.scroll-wrap .bar4').css('width', '100%');
		}
		if(now == 2) {
			$(".page-2 .works-wrap .moon2").css('animation-name', 'Moon2');
			$(".page-2 .works-wrap .works-small").css('animation-name', 'works');
			$(".page-2 .works-wrap .works-small .txt").css('animation-name', 'txt');
			$(".page-2 .works-wrap .show-me").css('animation-name', 'show');
			$(".page-2 .works-wrap .works-bg .number").css('animation-name', 'num');
			$('.scroll-wrap .bar2').css('width', '100%');
			$('.scroll-wrap .bar1').css('width', '100%');
			$('.scroll-wrap .bar3').css('width', '200%');
			$('.scroll-wrap .bar4').css('width', '100%');
		}
		else if(now == 3) {
			$(".contact-wrap .bg-contact").css('animation-name', 'bg');
			$(".contact-wrap .moon4").css('animation-name', 'Moon');
			$(".contact-wrap .title").css('animation-name', 'tit');
			$(".contact-wrap .lines div").css('animation-name', 'line');
			$('.scroll-wrap .bar2').css('width', '100%');
			$('.scroll-wrap .bar1').css('width', '100%');
			$('.scroll-wrap .bar3').css('width', '100%');
			$('.scroll-wrap .bar4').css('width', '200%');
		}

		$("html, body").stop().animate({ "scrollTop": $(".page").eq(now).offset().top + "px" }, 800);
	}
});


/* $(".mouse").mouseover(function () {
	$(this).css("display", "block");
});
$("html, body").mousemove(onMove).hover(onHover, onLeave);

function onHover() {
	$(".mouse").css("display", "block");
}

function onLeave() {
	$(".mouse").css("display", "none");
}

function onMove(e) {
	//console.log(e)
	var _x = e.pageX;
	var _y = e.pageY;
	$(".mouse").css({ "left": _x + "px", "top": _y + "px" });
	console.log(_x, _y);
}
 */



/* *******menu page - show******* */
$(".top-right .bar-box").on("click", function () {
	$(".menu-wrap").stop().slideToggle();
});


/* *******show me********* */
$(".page-1 .about-wrap .show-me").on("click", function () {
	$(".page-1 .about-cont").stop().slideDown();
});
$(".page-1 .skills .skills-bottom .bg").on("click", function () {
	$(".page-1 .about-cont").stop().slideUp();
});

$(".page-2 .works-wrap .show-me").on("click", function () {
	$(".page-2 .work-wrap").stop().slideDown();
})
$(".page-2 .work-wrap .skills-bottom .bg").on("click", function () {
	$(".page-2 .work-wrap").stop().slideUp();
})





