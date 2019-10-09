import Swiper from 'swiper';

export default () => {
	const SLIDER_CLASSNAME = 'js-slider-default';
	const $sliderDefault = $(`.${SLIDER_CLASSNAME}`);

	if ($sliderDefault.length === 0) return;

	const sliders = Object.keys($sliderDefault).reduce((acc, index) => {
		const slider = new Swiper($sliderDefault[index], {
			loop: false,
			mousewheel: false,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});

		return [...acc, slider];
	}, []);
};
