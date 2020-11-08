
$(".top-right .bar-box").on("click", function(){
	$(".menu-wrap").stop().slideToggle();
});

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
})

/* $(".menus .h").on("click", function(){

}) */