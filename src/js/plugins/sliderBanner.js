import Slider from '../classes/slider';

export default () => {
	const sliderBanner = new Slider('.js-slider-banner', {
		loop: true,
		mousewheel: false,
		effect: 'fade',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	sliderBanner.init();
};
