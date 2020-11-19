$(document).ready(function () {
    /*네비게이션*/
    $("nav>ul.menu>li").mouseenter(function () {
        $(this).find("ul.sub").stop().slideDown();
    });
    $("nav>ul.menu>li").mouseleave(function () {
        $(this).find("ul.sub").stop().slideUp();
    });

    /*모달-레이어팝업*/
    $('ul.notice>li').eq(0).click(function () {
        $(".modal").fadeIn();
    });
    $(".modal_btn").click(function () {
        $(".modal").fadeOut();
    });
    /*공지사항 갤러리*/
    $(".notice_gal h2").click(function () {
        $(".notice_gal h2").removeClass("on");
        $(this).addClass("on");
        $(".notice_gal ul").removeClass("on");
        $(this).next("ul").addClass("on");
    });

    $(".img ul.slide li").eq(0).siblings().hide();
    var slideI = 0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        console.log(slideI);
        $(".img ul.slide>li").eq(slideI).siblings().fadeOut(500);
        $(".img ul.slide>li").eq(slideI).fadeIn(500);
        
    }, 3000);


}); //ready end
