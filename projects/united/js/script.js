$(document).ready(function () {
    $('nav>ul.gnb>li').hover(function () {
        $(this).find('ul.sub').stop().slideDown();
    }, function () {
        $(this).find('ul.sub').stop().slideUp();
    });

    $('.join ul li').click(function (e) {
        e.preventDefault();
        $(".modal").show();
    });
    $(".inner_modal>button").click(function () {
        $(".modal").hide();
    });

    $(".training ul li").click(function (e) {
        e.preventDefault();
        $(".training ul li").siblings().removeClass("on");
        $(this).addClass("on");
        var slideI = $(this).index();
        console.log(slideI);
        $(".exp").removeClass("on");
        $(".type").removeClass("on");
        $(".exp").eq(slideI).addClass('on');
        $(".type").eq(slideI).addClass('on');
    });
});
