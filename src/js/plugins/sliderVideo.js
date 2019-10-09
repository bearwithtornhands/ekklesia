import Swiper from 'swiper';

export default () => {
	const SLIDER_CLASSNAME = 'js-slider-video';
	const $sliderDefault = $(`.${SLIDER_CLASSNAME}`);

	if ($sliderDefault.length === 0) return;

	const sliders = Object.keys($sliderDefault).reduce((acc, index) => {
		const slider = new Swiper($sliderDefault[index], {
			loop: false,
			mousewheel: false,
			slidesPerView: 4,
			spaceBetween: 24,
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
