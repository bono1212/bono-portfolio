$(document).ready(function(){
    $('.nav_bg, nav>ul.gnb>li').hover(function(){
        $('ul.sub, .nav_bg').stop().slideDown();
        $("header").addClass("on");
        $('header h1 a img').attr({
            src: 'images/top_logo2.png',
        })
    }, function(){
        $('ul.sub, .nav_bg').stop().slideUp();
        $("header").removeClass("on");
        $('header h1 a img').attr({
            src: 'images/top_logo1.png',
        })
    });
    
    var slideI = 0;
    $("ul.slide>li").eq(0).siblings().css("left", "-100%");
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        console.log(slideI);
        $("ul.slide>li").eq(slideI).siblings().animate({left:"-100%"}, 500);
        $("ul.slide>li").eq(slideI).animate({"left":0}, 500);
        
    }, 3000);
    
    
    
    
    
});