$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Slider
	$(".rslides").responsiveSlides({
		auto: false,
		pause: true,
		nav: true,
		pager: false,
		speed: 1000,
		namespace: "callbacks"
	});

	$('.navbar-toggle').on('click', function(){
		$('.navbar').toggleClass('open');
	});
	$('.social-menu-toggle').on('click', function(){
		$('.social-menu').toggleClass('open');
	});

	$('.social-btn').on('click', function(){
		$('.social').toggleClass('social-open');
	});

	//Slides instagram
	$('.bxslider').bxSlider({
		slideWidth: 200,
		minSlides: 2,
		maxSlides: 6,
		slideMargin: 0,
		pager: false,
		speed: 500,
		touchEnabled: true
	});

});

