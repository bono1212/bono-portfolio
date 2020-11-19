$(function(){

    $("header nav ul.menu > li, .nav_bg ").hover(function(){
     $(".nav_bg, ul.sub").stop().slideDown();   
    },function(){
       $(".nav_bg, ul.sub").stop().slideUp(); 
    })
    
    $(".main ul.slide li").eq(0).siblings().hide();
    var slideIn = 0;
    
    setInterval(function(){
        if(slideIn<2){
            slideIn++;
        }else{
            slideI=0;
        }
        console.log(slideIn);
        $(".main ul.slide>li").eq(slideIn).siblings().fadeOut(500);
        $(".main ul.slide>li").eq(slideIn).fadeIn(500);
        
    }, 3000);
    
    
    
});