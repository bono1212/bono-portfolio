$(function(){
    $('nav>ul.gnb>li').hover(function(){
        $(this).find('ul.sub').stop().fadeIn();
    },function(){
        $(this).find('ul.sub').stop().fadeOut();
    });
});