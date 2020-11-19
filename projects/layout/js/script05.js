$(document).ready(function () {
    /*네비게이션*/
    $('ul.gnb>li').hover(function () {
        $("ul.sub").stop().slideDown();
    }, function () {
        $("ul.sub").stop().slideUp();
    });
    
    $(".main-visual ul.slide>li").eq(0).siblings().css("left", "-100%");
    var slideI = 0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        console.log(slideI);
        $(".main-visual ul.slide>li").eq(slideI).siblings().animate({left: '-100%'}, 500);
        $(".main-visual ul.slide>li").eq(slideI).animate({"left": 0}, 500);
        
    }, 3000);
});//ready end
