
/* 	$(".mouse").mouseover(function() {
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
		console.log(e)
		var _x = e.pageX;
		var _y = e.pageY;
		$(".mouse").css({"left": _x+"px", "top": _y+"px"});
	} */




/* *******menu page - show******* */
$(".top-right .bar-box").on("click", function(){
	$(".menu-wrap").stop().slideToggle();
});

/* *******show me********* */
$(".page-1 .about-wrap .show-me").on("click", function(){
	$(".page-1 .about-cont").stop().slideToggle();
})
$(".page-2 .works-wrap .show-me").on("click", function(){
	$(".page-2 .work-wrap").stop().slideToggle();
})


/* *******menu page에서 넘어가기******** */
$(".scroll-wrap .bar2").on("click", function(){
	$(".page1").stop().show();
});






$(window).scrollTop()





/* 
$(".scroll-wrap .bar2").on("click", function(){
	$(".scroll-wrap .bar2").stop().css("width", "150%");
	$(".scroll-wrap .bar1").stop().css("width", "100%");
	$(".scroll-wrap .bar3").stop().css("width", "100%");
	$(".scroll-wrap .bar4").stop().css("width", "100%");
})
$(".scroll-wrap .bar3").on("click", function(){
	$(".scroll-wrap .bar3").stop().css("width", "150%");
	$(".scroll-wrap .bar2").stop().css("width", "100%");
	$(".scroll-wrap .bar1").stop().css("width", "100%");
	$(".scroll-wrap .bar4").stop().css("width", "100%");
})
$(".scroll-wrap .bar4").on("click", function(){
	$(".scroll-wrap .bar4").stop().css("width", "150%");
	$(".scroll-wrap .bar3").stop().css("width", "100%");
})
$(".scroll-wrap .bar1").on("click", function(){
	$(".scroll-wrap .bar1").stop().css("width", "150%");
	$(".scroll-wrap .bar4").stop().css("width", "100%");
	$(".scroll-wrap .bar2").stop().css("width", "100%");
	$(".scroll-wrap .bar3").stop().css("width", "100%");
}) */

/* $(".menus .h").on("click", function(){

}) */