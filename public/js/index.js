var now = 0;
var wheel = new Wheel(document, function (direction, e) {
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
	$(".menu-wrap .contents .menu").eq(now).trigger("click");

});

console.log(wheel);

document.addEventListener('wheel', wheel.onWheel, {passive: true});


function pageAni() {
	if(now == 0) {
		$('.scroll-wrap .bar1').css('width', '200%');
		$('.scroll-wrap .bar2').css('width', '100%');
		$('.scroll-wrap .bar3').css('width', '100%');
		$('.scroll-wrap .bar4').css('width', '100%');
	}
	if(now == 1) {
		$('.page-1 .about-wrap .about-bg .number').css('animation-name', '');
		$('.page-1 .about-wrap .about-bg .number').css('animation-name');
		$('.page-1 .about-wrap .about-bg .number').css({'animation-name': 'num', 'animation-direction': 'normal'});

		$('.page-1 .about-wrap .show-me').css('animation-name', '');
		$('.page-1 .about-wrap .show-me').css('animation-name');
		$('.page-1 .about-wrap .show-me').css({'animation-name': 'show', 'animation-direction': 'normal'});

		$('.page-1 .about-wrap .about-small .txt').css('animation-name', '');
		$('.page-1 .about-wrap .about-small .txt').css('animation-name');
		$('.page-1 .about-wrap .about-small .txt').css({'animation-name': 'txt', 'animation-direction': 'normal'});

		$('.page-1 .about-wrap .moon2').css('animation-name', '');
		$('.page-1 .about-wrap .moon2').css('animation-name');
		$('.page-1 .about-wrap .moon2').css({'animation-name': 'Moon2', 'animation-direction': 'normal'});

		$('.page-1 .about-wrap .about-small ').css('animation-name', '');
		$('.page-1 .about-wrap .about-small ').css('animation-name');
		$('.page-1 .about-wrap .about-small ').css({'animation-name': 'about', 'animation-direction': 'normal'});

		$('.scroll-wrap .bar2').css('width', '200%');
		$('.scroll-wrap .bar1').css('width', '100%');
		$('.scroll-wrap .bar3').css('width', '100%');
		$('.scroll-wrap .bar4').css('width', '100%');
	}
	else {
		$('.page-1 .about-wrap .about-bg .number').css('animation-name', '');
		$('.page-1 .about-wrap .about-bg .number').css('animation-name');
		$('.page-1 .about-wrap .about-bg .number').css({'animation-name': 'num', 'animation-direction': 'reverse'});

		$('.page-1 .about-wrap .show-me').css('animation-name', '');
		$('.page-1 .about-wrap .show-me').css('animation-name');
		$('.page-1 .about-wrap .show-me').css({'animation-name': 'show', 'animation-direction': 'reverse'});

		$('.page-1 .about-wrap .about-small .txt').css('animation-name', '');
		$('.page-1 .about-wrap .about-small .txt').css('animation-name');
		$('.page-1 .about-wrap .about-small .txt').css({'animation-name': 'txt', 'animation-direction': 'reverse'});

		$('.page-1 .about-wrap .moon2').css('animation-name', '');
		$('.page-1 .about-wrap .moon2').css('animation-name');
		$('.page-1 .about-wrap .moon2').css({'animation-name': 'Moon2', 'animation-direction': 'reverse'});

		$('.page-1 .about-wrap .about-small ').css('animation-name', '');
		$('.page-1 .about-wrap .about-small ').css('animation-name');
		$('.page-1 .about-wrap .about-small ').css({'animation-name': 'about', 'animation-direction': 'reverse'});
	}

	if(now == 2) {
		$(".page-2 .works-wrap .moon2").css('animation-name', '');
		$(".page-2 .works-wrap .moon2").css('animation-name');
		$(".page-2 .works-wrap .moon2").css({'animation-name': 'Moon2', 'animation-direction': 'normal'});

		$(".page-2 .works-wrap .works-small").css('animation-name', '');
		$(".page-2 .works-wrap .works-small").css('animation-name');
		$(".page-2 .works-wrap .works-small").css({'animation-name': 'works', 'animation-direction': 'normal'});

		$(".page-2 .works-wrap .works-small .txt").css('animation-name', '');
		$(".page-2 .works-wrap .works-small .txt").css('animation-name');
		$(".page-2 .works-wrap .works-small .txt").css({'animation-name': 'txt', 'animation-direction': 'normal'});

		$(".page-2 .works-wrap .show-me").css('animation-name', '');
		$(".page-2 .works-wrap .show-me").css('animation-name');
		$(".page-2 .works-wrap .show-me").css({'animation-name': 'show', 'animation-direction': 'normal'});

		$(".page-2 .works-wrap .works-bg .number").css('animation-name', '');
		$(".page-2 .works-wrap .works-bg .number").css('animation-name');
		$(".page-2 .works-wrap .works-bg .number").css({'animation-name': 'num', 'animation-direction': 'normal'});

		$('.scroll-wrap .bar2').css('width', '100%');
		$('.scroll-wrap .bar1').css('width', '100%');
		$('.scroll-wrap .bar3').css('width', '200%');
		$('.scroll-wrap .bar4').css('width', '100%');
	}
	else {
		$(".page-2 .works-wrap .moon2").css('animation-name', '');
		$(".page-2 .works-wrap .moon2").css('animation-name');
		$(".page-2 .works-wrap .moon2").css({'animation-name': 'Moon2', 'animation-direction': 'reverse'});

		$(".page-2 .works-wrap .works-small").css('animation-name', '');
		$(".page-2 .works-wrap .works-small").css('animation-name');
		$(".page-2 .works-wrap .works-small").css({'animation-name': 'works', 'animation-direction': 'reverse'});

		$(".page-2 .works-wrap .works-small .txt").css('animation-name', '');
		$(".page-2 .works-wrap .works-small .txt").css('animation-name');
		$(".page-2 .works-wrap .works-small .txt").css({'animation-name': 'txt', 'animation-direction': 'reverse'});

		$(".page-2 .works-wrap .show-me").css('animation-name', '');
		$(".page-2 .works-wrap .show-me").css('animation-name');
		$(".page-2 .works-wrap .show-me").css({'animation-name': 'show', 'animation-direction': 'reverse'});

		$(".page-2 .works-wrap .works-bg .number").css('animation-name', '');
		$(".page-2 .works-wrap .works-bg .number").css('animation-name');
		$(".page-2 .works-wrap .works-bg .number").css({'animation-name': 'num', 'animation-direction': 'reverse'});
	}


	if(now == 3) {
		$(".contact-wrap .bg-contact").css('animation-name', '');
		$(".contact-wrap .bg-contact").css('animation-name');
		$(".contact-wrap .bg-contact").css({'animation-name': 'bg', 'animation-direction': 'normal'});

		$(".contact-wrap .moon4").css('animation-name', '');
		$(".contact-wrap .moon4").css('animation-name');
		$(".contact-wrap .moon4").css({'animation-name': 'Moon', 'animation-direction': 'normal'});

		$(".contact-wrap .title").css('animation-name', '');
		$(".contact-wrap .title").css('animation-name');
		$(".contact-wrap .title").css({'animation-name': 'tit', 'animation-direction': 'normal'});

		$(".contact-wrap .lines div").css('animation-name', '');
		$(".contact-wrap .lines div").css('animation-name');
		$(".contact-wrap .lines div").css({'animation-name': 'line', 'animation-direction': 'normal'});


		$('.scroll-wrap .bar2').css('width', '100%');
		$('.scroll-wrap .bar1').css('width', '100%');
		$('.scroll-wrap .bar3').css('width', '100%');
		$('.scroll-wrap .bar4').css('width', '200%');
	}
	else {
		$(".contact-wrap .bg-contact").css('animation-name', '');
		$(".contact-wrap .bg-contact").css('animation-name');
		$(".contact-wrap .bg-contact").css({'animation-name': 'bg', 'animation-direction': 'reverse'});

		$(".contact-wrap .moon4").css('animation-name', '');
		$(".contact-wrap .moon4").css('animation-name');
		$(".contact-wrap .moon4").css({'animation-name': 'Moon', 'animation-direction': 'reverse'});

		$(".contact-wrap .title").css('animation-name', '');
		$(".contact-wrap .title").css('animation-name');
		$(".contact-wrap .title").css({'animation-name': 'tit', 'animation-direction': 'reverse'});

		$(".contact-wrap .lines div").css('animation-name', '');
		$(".contact-wrap .lines div").css('animation-name');
		$(".contact-wrap .lines div").css({'animation-name': 'line', 'animation-direction': 'reverse'});
	}

	$("html, body").stop().animate({ "scrollTop": $(".page").eq(now).offset().top + "px" }, 800);
}


$(".scroll-wrap .bar").eq(0).trigger("click");
$(".scroll-wrap .bar").on("click", onBarClick);

function onBarClick() {
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
	now = $(this).index();
	pageAni();
	//console.log(this);
}

$(".menu-wrap .contents .menu").eq(0).trigger("click");
$(".menu-wrap .contents .menu").on("click", onPageChange);

function onPageChange(){
	$(this).siblings().removeClass("active");
	$(".page-0").stop().show();
}






/* *******menu page - show******* */
$(".top-right .bar-box").on("click", function () {
	$(".menu-wrap").stop().slideToggle();
});


/* *******show me********* */
$(".page-1 .about-wrap .show-me").on("click", function (e) {
	e.stopPropagation();
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





