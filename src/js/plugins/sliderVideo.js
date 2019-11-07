import Swiper from 'swiper';

export default () => {
	const SLIDER_CLASSNAME = '.js-slider-video';

	if ($(SLIDER_CLASSNAME).length === 0) return;

	const slider = new Swiper(SLIDER_CLASSNAME, {
		loop: false,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 8,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 24
			},
			1264: {
				slidesPerView: 2,
				slidesPerGroup: 3,
				spaceBetween: 24,
				allowTouchMove: false
			}
		}
	});
};
