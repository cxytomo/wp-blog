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
	}, 4000);

	function stopInterval() {
		window.clearInterval(interv);
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
		} else {
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
	slides_box.mouseenter(function() {
		stopInterval();
	});
	slides_box.mouseleave(function() {
		resumeInterval();
	});
})();

//image
(function(){
	$('article.image .img_wrapper').mouseenter(function(e) {
		var tar;
		e = e || event;
		tar  = e.target || e. srcElement;
		tar.parentNode.getElementsByClassName('zoom')[0].style.display = 'block';
	});
	$('article.image .img_wrapper').mouseleave(function(e) {
		var tar;
		e = e || event;
		tar  = e.target || e. srcElement;
		tar.parentNode.getElementsByClassName('zoom')[0].style.display = 'none';
	});
})();

//scrollToTop
function getOffset(w) {
		w = w || window;
		//this works in all current browsers except ≤IE8
		if(w.pageXOffset != null) 
			return {
			x: w.pageXOffset, y: w.pageYOffset
		} 
		var doc = w.document;
		if(doc.compatMode == "CSS1Compat") 
			return {
			x: doc.documentElement.scrollLeft, y: doc.documentElement.scrollTop
		}
		return {
			x: doc.body.scrollLeft, y: doc.body.scrollTop
		}
}

window.onscroll = function(){
	var offset = getOffset();
	if(offset.y > 400) {
		$('#nav .toTop').css('opacity','1');
		$('#nav .archives').css('paddingRight','58px');
	} else {
		$('#nav .toTop').css('opacity','0');
		$('#nav .archives').css('paddingRight','18px');
	}
};

$('#nav .archives .toTop').click(function() {
	window.scrollTo(0,0);
});
