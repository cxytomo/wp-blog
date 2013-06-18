//slides
(function() {
	var n
	, interv
	, slides = $('.about_slides li')
	, slides_box = $('.about_slides')
	, position_ctr = $('.slides_position_tip li')
	, N = slides.length;
	interv = window.setInterval(count(n), 2000);
	function clearInterval() {
		window.clearInterval(interv);
	}
	function resumeInterval() {
		interv = window.setInterval(count(n), 2000);
	}
	function count(n) {
		n = n || 0;
		if(n % N == 0) {
			n =0;
		}
		else {
			n = n + 1;
			console.log(n);
		}
		return slideTo(n);
	}
	function slideTo(n) {
		$('.about .active').removeClass('active');
		slides[n].className = slides[n].className + ' active';
		position_ctr[n].className = position_ctr[n].className + ' active';
		$('.about_slides .slides_content').css({'-webkit-transform':'rotateY('+120 * n +'deg)','-moz-transform':'rotateY('+120 * n +'deg)','transform':'rotateY('+120 * n +'deg)'});
		console.log('in');
	}
	slides_box[0].addEventListener('mouseenter',clearInterval,false);
	slides_box[0].addEventListener('mouseleave',resumeInterval,false);
	$()
})()