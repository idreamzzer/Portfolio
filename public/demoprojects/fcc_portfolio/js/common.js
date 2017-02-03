$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	// static images and links
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	// parallax logo
	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		$('.header__logo').css({
			'transform' : 'translate(0px, '+ wScroll /2 +'%)'
		});
	});


	// navigation
	$('.nav__button').click(function() {
		$('.nav__overlay').toggleClass('overlay-open');
		$('.burger').toggleClass('burder-transform')
	});


	// email ajax send
	// $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
	// 	var form_data = $(this).serialize(); //собираем все данные из формы
	// 	$.ajax({
	// 		type: "POST", //Метод отправки
	// 		url: "send.php", //путь до php фаила отправителя
	// 		data: form_data
	// 	});
	// });

	});
