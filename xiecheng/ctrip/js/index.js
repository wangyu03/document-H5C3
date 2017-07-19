var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		loop: true,
		autoplayDisableOnInteraction: false,
		autoplay: 3000,
		onInit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper);
		}
	})