$(document).ready(function(){
    $('nav>ul.gnb>li').hover(function(){
        $(this).children('ul.sub').stop().slideDown();
    },function(){
        $(this).children('ul.sub').stop().slideUp();
    });
});//ready end