$(document).ready(function(){
    $('.nav_bg, nav>ul.gnb>li').hover(function(){
        $('.nav_bg, ul.sub').stop().slideDown();
    }, function(){
        $('.nav_bg, ul.sub').stop().slideUp();
    }); 
});