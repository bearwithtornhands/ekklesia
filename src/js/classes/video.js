import app from '../helpers/app';

class Video {
	constructor(container, selectors) {
		const defaultSelectors = {
			LINK_SELECTOR: 'a',
			IMG_SELECTOR: 'img',
			INIT_MOD: 'is-init'
		};

		this.selectors = { ...defaultSelectors, ...selectors };
		this.$container = $(container);
		this.$link = $(this.selectors.LINK_SELECTOR, this.$container);
		this.$img = $(this.selectors.IMG_SELECTOR, this.$container);
	}

	init = () => {
		if (this.$link.length === 0) return;

		this.listendClick();

		this.$link.removeAttr('href');
		this.$container.addClass(this.selectors.INIT_MOD);
	};

	listendClick = () => {
		this.$container.on('click', this.selectors.LINK_SELECTOR, e => {
			const iframe = this.createIframe(this.parseURL(this.$img[0]));

			$(e.currentTarget).remove();
			this.$container.append(iframe);
		});
	};

	parseURL = img => {
		const regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/mqdefault\.jpg/i;
		const url = img.src;
		const match = url.match(regexp);

		return match[1];
	};

	generateURL = id => {
		const query = '?rel=0&showinfo=0&autoplay=1';

		return 'https://www.youtube.com/embed/' + id + query;
	};

	createIframe = id => {
		const iframe = document.createElement('iframe');

		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'autoplay');
		iframe.setAttribute('src', this.generateURL(id));

		return iframe;
	};
}

export default Video;
