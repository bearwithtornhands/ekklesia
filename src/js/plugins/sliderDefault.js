import Swiper from 'swiper';

export default () => {
	const SLIDER_CLASSNAME = '.js-slider-default';

	if ($(SLIDER_CLASSNAME).length === 0) return;

	const slider = new Swiper(SLIDER_CLASSNAME, {
		loop: false,
		effect: 'fade',
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
			1264: {
				allowTouchMove: false
			}
		},
		on: {
			slideChange: function() {
				const { slides, activeIndex } = this;

				Object.keys(slides).forEach(function(index) {
					if (+index !== activeIndex) {
						$(slides[index]).css('opacity', '0');
					}
				});
			}
		}
	});
};
