
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


/* *******scroll******** */

$(window).on("scroll", onScroll);
function onScroll() {
	var sctop = $(this).scrollTop();
	var page0 = $(".page-0").offset().top - $(this).height();
	if(sctop > page0) {
		$(".page-0").scrollTop();
	}
}




/* *******menu page - show******* */
$(".top-right .bar-box").on("click", function(){
	$(".menu-wrap").stop().slideToggle();
});


/* *******show me********* */
$(".page-1 .about-wrap .show-me").on("click", function(){
	$(".page-1 .about-cont").stop().slideDown();
});
$(".page-1 .skills .skills-bottom .bg").on("click", function(){
	$(".page-1 .about-cont").stop().slideUp();
});

$(".page-2 .works-wrap .show-me").on("click", function(){
	$(".page-2 .work-wrap").stop().slideDown();
})
$(".page-2 .work-wrap .skills-bottom .bg").on("click", function(){
	$(".page-2 .work-wrap").stop().slideUp();
})





