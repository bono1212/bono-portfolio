$(document).ready(function () {
    //setInterval(function(){}, 밀리초);
    var timer = setInterval(function () {
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var hNum;
        var mNum;
        var sNum;

        //tsag 1 oront toot ved urd n 0 tawih
        if (hr >= 10) {
            hNum = hr;
        } else {
            hNum = "0" + hr;
        }
        if (min >= 10) {
            mNum = min;
        } else {
            mNum = "0" + min;
        }
        if (sec >= 10) {
            sNum = sec;
        } else {
            sNum = "0" + sec;
        }

        //p -d bgaa tsagg hewleh
        $("p span").eq(0).text(hNum);
        $("p span").eq(1).text(mNum);
        $("p span").eq(2).text(sNum);

    }, 1000); //1sec tutam dawtah

    var now = new Date();
    var hr = now.getHours
    //tsagaa dagad bg oorchlogdh
    if (hr >= 5 && hr < 11) {
        $("#wrap").removeClass();
        $("#wrap").addClass("morning");
        $("nav li").removeClass();
        $("nav li").eq(0).addClass("on");
    } else if (hr >= 11 && hr < 16) {
        $("#wrap").removeClass();
        $("#wrap").addClass("afternoon");
        $("nav li").removeClass();
        $("nav li").eq(1).addClass("on");
    } else if (hr >= 16 && hr < 20) {
        $("#wrap").removeClass();
        $("#wrap").addClass("evening");
        $("nav li").removeClass();
        $("nav li").eq(2).addClass("on");
    } else if (hr >= 20 && hr < 5) {
        $("#wrap").removeClass();
        $("#wrap").addClass("night");
        $("nav li").removeClass();
        $("nav li").eq(3).addClass("on");
    }
    
//nav click hiwel theme oorchlogdh
    $("nav li").on("click", function(){
        var className=$(this).children("a").text();
        //console.log(className);
        $("nav li").removeClass();
        $(this).addClass("on");
        $("#wrap").removeClass();
        $("#wrap").addClass(className);
    });
}); //ready end
