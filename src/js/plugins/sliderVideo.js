import Swiper from 'swiper';

export default () => {
	const SLIDER_CLASSNAME = '.js-slider-video';

	if ($(SLIDER_CLASSNAME).length === 0) return;

	const slider = new Swiper(SLIDER_CLASSNAME, {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 8,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
			// dynamicBullets: true,
			// dynamicMainBullets: 1
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 24
			},
			1264: {
				slidesPerView: 2,
				spaceBetween: 24,
				allowTouchMove: false
			}
		}
	});
};
