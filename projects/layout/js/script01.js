$(document).ready(function () {

    $("nav>ul>li").mouseenter(function () {
        //$('ul.sub').show();
        //$('ul.sub').stop().fadeIn();
        $('ul.sub').stop().slideDown();
    });
    $("nav>ul>li").mouseleave(function () {
        //$('ul.sub').hide();
        //$('ul.sub').stop().fadeOut();
        $('ul.sub').stop().slideUp();
    });
  /*      $('.notice>ul.gnb>li').eq(0).click(function () {
        $(".modal").show();
    });
        $(".inner_modal>button").click(function(){
            $(".modal").hide();
        });*/
    
    var slideI = 0;
    $("ul.slide>li").eq(0).siblings().css("top", "-300%");
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        console.log(slideI);
        $("ul.slide>li").eq(slideI).siblings().animate({top:"-300%"}, 500);
        $("ul.slide>li").eq(slideI).animate({"top":0}, 500);
        
    }, 3000);
    
}); //ready end
