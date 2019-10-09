import Swiper from 'swiper';

export default class Slider {
	constructor(containerClassName, options = {}) {
		this.containerClassName = containerClassName;
		this.options = options;
	}

	init = () => {
		this.slider = new Swiper(this.containerClassName, this.options);
	};
}
