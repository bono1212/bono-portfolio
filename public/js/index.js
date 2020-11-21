$(".menu-bar").on("click", function () {
	$(".titles").stop().slideToggle({direction: "left"}, 500);
});









// 이메일 발송
emailjs.init("user_8iMQkOkWji9BqufHXmUZA");
function mailSend(f) {
	f.contact_number.value = Math.random() * 100000 | 0;
	emailjs.sendForm('service_ggqs3fu', 'template_gfhuwtw', f);
	return false;
}