$(document).ready(function(){
    $('.nav_bg, nav>ul.gnb>li').hover(function(){
        $('.nav_bg, ul.sub').stop().slideDown();
    }, function(){
        $('.nav_bg, ul.sub').stop().slideUp();
    }); 
    
    
    $(".main ul.slide>li").eq(0).siblings().css("top", "-300px");
    var slideI = 0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        console.log(slideI);
        $(".main ul.slide>li").eq(slideI).siblings().animate({top: '-300px'}, 500);
        $(".main ul.slide>li").eq(slideI).animate({"top": 0}, 500);
        
    }, 3000);
    
});