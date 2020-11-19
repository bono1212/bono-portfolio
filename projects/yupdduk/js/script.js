$(document).ready(function(){
    $('.nav>ul.gnb>li, .nav_bg').mouseenter(function(){
        $('ul.sub, .nav_bg').stop().slideDown();
    });
    $('.nav>ul.gnb>li, .nav_bg').mouseleave(function(){
        $('ul.sub, .nav_bg').stop().slideUp();
    });
    
    $('ul.slide_tab li').click(function(){
        $('ul.slide_tab li').removeClass("on");
        $(this).addClass("on");
        var tabIndex = $(this).index();//index-n ogogdlig awchirch bgaa
        console.log(tabIndex);
        $(".contents section").removeClass("on");
        $(".contents section").eq(tabIndex).addClass('on');       
    });
});


    
