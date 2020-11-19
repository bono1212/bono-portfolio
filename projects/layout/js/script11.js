$(function(){
    $('nav>ul.gnb>li').mouseenter(function(){
        $(this).find('ul.sub').stop().fadeIn();
    });
    $('nav>ul.gnb>li').mouseleave(function(){
        $(this).find('ul.sub').stop().fadeOut();
    });
});