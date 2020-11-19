$(function () {
    var ht = $(window).height();
    $("section").height(ht);


    $(window).on("resize", function () {
        var ht = $(window).height();
        $("section").height(ht);
    });

    $("section").on("mousemove", function (e) {
        var posX = e.pageX;
        var posY = e.pageY;

        //first box
        $(".p11").css({
            right: 20 - (posX / 30),
            bottom: 20 - (posY / 30)
        });
        $(".p12").css({
            right: 130 - (posX / 20),
            bottom: -40 - (posY / 20)
        });
        $(".p13").css({
            right: 60 - (posX / 10),
            bottom: 180 - (posY / 10)
        });

        $(".p21").css({
            right: -180 - (posX / 10),
            bottom: -480 - (posY / 10)
        });
        $(".p22").css({
            right: 130 - (posX / 10),
            bottom: -40 - (posY / 10)
        });

        $(".p31").css({
            right: 180 - (posX / 10),
            bottom: 30 - (posY / 10)
        });
        $(".p32").css({
            right: 110 - (posX / 10),
            bottom: -270 - (posY / 10)
        });
        $(".p32").css({
            right: -70 - (posX / 10),
            bottom: -130 - (posY / 10)
        });

        $(".p41").css({
            right: 20 - (posX / 30),
            bottom: -120 - (posY / 30)
        });
        $(".p42").css({
            right: 0 - (posX / 10),
            bottom: -180 - (posY / 30)
        });

    });

    $("#menu li").click(function (e) {
        e.preventDefault();
        var ht = $(window).height();
        var i = $(this).index();

        var nowTop = i * ht;
        $("html,body").stop().animate({
            "scrollTop": nowTop
        }, 1400);

    });

    $(window).scroll(function () {
        var ht = $(window).height();
        var scroll = $(window).scrollTop();

        if (scroll >= ht*0 && scroll < ht*1) {
            $("#menu li").removeClass();
            $("#menu li").eq(0).addClass("on");
        }
        if (scroll >= ht*1 && scroll < ht*2) {
            $("#menu li").removeClass();
            $("#menu li").eq(1).addClass("on");
        }
        if (scroll >= ht*2 && scroll < ht*3) {
            $("#menu li").removeClass();
            $("#menu li").eq(2).addClass("on");
        }
        if (scroll >= ht*3 && scroll < ht*4)
       {   $("#menu li").removeClass();
           $("#menu li").eq(3).addClass("on");}
    });

    /*section der mouse hodolgoh ved*/
    $("section").on("mousewheel", function (event, delta) {
        if (delta > 0) {
            var prev = $(this).prev().offset().top;
            $("html, body").stop().animate({
                "scrollTop": prev
            }, 1400, 'easeOutBounce');
        } else if (delta < 0) {
            var next = $(this).next().offset().top;
            $("html, body").stop().animate({
                "scrollTop": next
            }, 1400, 'easeOutBounce');
        }
    });



}); //ready end
