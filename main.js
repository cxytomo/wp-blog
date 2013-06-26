//slides
window.onload = (function() {
	var n = 0
	, interv
	, slides = $('.about_slides li')
	, slides_box = $('.slides_content')
	, position_ctr = $('.slides_position_tip li')
	, N = slides.length
	, mod
	, interv = window.setInterval(function(){
		count();
		console.log(interv);
	}, 4000);

	function stopInterval() {
		window.clearInterval(interv);
		console.log('clearInterval');
	}

	function resumeInterval() {
		interv = window.setInterval(function(){
		count();
		}, 4000);
	}

	function count() {
		n = n + 1;
		return slideTo(n);
	}

	function slideTo(n) {
		var deg = 120 * n;
		if(n < 0) {
			mod = (n + 100 * N) % N;
		}
		else {
			mod = n % N;
		}
		$('.about .active').removeClass('active');
		slides[mod].className = slides[mod].className + ' active';
		position_ctr[mod].className = position_ctr[mod].className + ' active';
		$('.about_slides .slides_content').css({'-webkit-transform':'rotateY('+ deg +'deg)','-moz-transform':'rotateY('+ deg +'deg)','transform':'rotateY('+ deg +'deg)'});
	}
	function countPrevSiblings(elem) {
	    var i = 0;
	    while((elem=elem.previousSibling) != null) {
	        // count element nodes only
	        if (elem.nodeType == 1) {
	            ++i;
	        }
	    }
	    return i;
	}

	$('.slides_position_tip li').click(function(e) {
		var tar
		, active = countPrevSiblings($('.slides_position_tip .active')[0])
		, dif;
		e = e || window.event;
		tar = e.target || e.srcElement;
		dif = countPrevSiblings(tar) - active;
		n = n + dif;
		stopInterval();
		slideTo(n);
		resumeInterval();
	});
	$('.slide_controller.prev').click(function(e) {
		n = n - 1;
		stopInterval();
		slideTo(n);
		resumeInterval();
	});
	$('.slide_controller.next').click(function(e) {
		n = n + 1;
		stopInterval();
		slideTo(n);
		resumeInterval();
	});
	slides_box[0].addEventListener('mouseenter',stopInterval,false);
	slides_box[0].addEventListener('mouseleave',resumeInterval,false);
})();