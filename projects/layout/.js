$(function(){

    $("header nav ul.menu > li, .nav_bg ").hover(function(){
     $(".nav_bg, ul.sub").stop().slideDown();   
    },function(){
       $(".nav_bg, ul.sub").stop().slideUp(); 
    })
});