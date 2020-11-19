$(document).ready(function () {
    $("ul.main_slide").bxSlider({
        auto: true,
        pagerCustom: '.dot', //페이저만들어쓰기
        nextSelector: '#next', //다음 버튼 지정
        prevSelector: '#prev', //이전 버튼 지정
        nextText: '&gt;', //다음 버튼 요소에 ‘next’ 텍스트 삽입 , 텍스트가 필요 없다면 text-indent로 텍스트 숨김
        prevText: '&lt;', //이전 버튼 요소에 ‘prev’ 텍스트 삽입
    });

});
