$(".menu-bar").on("click", function () {
	$(".titles").stop().animate({ width: "toggle" });
});


/* page change event */
var $menu = $(".titles .contents .menu");
var $contents = $(".page");

$menu.click(function () {
	var idx = $(this).index();
	var section = $contents.eq(idx);
	var sectionDis = section.offset().top;
	// console.log(sectionDis);
	$(".titles").stop().hide();
	$('html, body').stop().animate({ scrollTop: sectionDis });
});


new WOW().init();

/* back to top */
var bt = document.getElementById('back-top'), scrollPos;


window.addEventListener('scroll', function () {
	var docElem = document.documentElement, offset = 0, docHeight;
	docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
	if (docHeight == 0) {
		offset = docHeight / 4;
	}
	scrollPos = docElem.scrollTop;
	console.log(scrollPos, offset);
	if (scrollPos > offset) {
		bt.className = 'visible';
	}
	else {
		bt.className = '';
	}
});

bt.addEventListener('click', function (ev) {
	ev.preventDefault();
	// docElem.scrollTop = 0;
	scrollToTop();
});

function scrollToTop() {
	$("html, body").stop().animate({"scrollTop": 0}, 500);
	/*
	var scrollInterval = setInterval(function () {
		if (scrollPos != 0) {
			window.scrollBy(0, -55);
		}
		else {
			clearInterval(scrollInterval);
		}
	}, 15);
	*/
}


// 이메일 발송
emailjs.init("user_8iMQkOkWji9BqufHXmUZA");

function mailSend(f) {
	f.contact_number.value = Math.random() * 100000 | 0;
	emailjs.sendForm('service_5amyxm5', 'template_gfhuwtw', f);
	return false;
}



var $grid = $('.work .grid').imagesLoaded( function() {
	$grid.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});