$(document).ready(function () {
    /*navi*/
    $('nav>ul.gnb>li,.nav_bg').hover(function () {
        $('ul.sub,.nav_bg').stop().slideDown();
    }, function () {
        $('ul.sub,.nav_bg').stop().slideUp();
    });

    //modal
/*    $('.notice>ul>li:first').click(function () {
        $(".modal").show();
    });*/
    
    $('.notice>ul>li').eq(0).click(function () {
        $(".modal").show();
    });
        $(".inner_modal>button").click(function(){
            $(".modal").hide();
        });
    
    var slideI =0;
    $("ul.slide>li").eq(0).siblings().css("left", "-100%");
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        console.log(slideI);
        $("ul.slide>li").eq(slideI).siblings().animate({left:"-100%"}, 500);
        $("ul.slide>li").eq(slideI).animate({"left":0}, 500);
        
    }, 3000);
    
});
