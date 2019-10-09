import Swiper from 'swiper';

export default () => {
	const sliderBanner = new Swiper('.js-slider-banner', {
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
};
