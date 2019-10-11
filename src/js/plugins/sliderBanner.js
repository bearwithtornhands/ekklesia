import Swiper from 'swiper';

export default () => {
	const SLIDER_CLASSNAME = '.js-slider-banner';

	if ($(SLIDER_CLASSNAME).length === 0) return;

	const sliderBanner = new Swiper(SLIDER_CLASSNAME, {
		loop: true,
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
