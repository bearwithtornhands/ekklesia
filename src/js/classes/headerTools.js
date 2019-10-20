import $ from 'jquery';
import app from '../helpers/app';
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks
} from 'body-scroll-lock';

export default class HeaderTools {
	constructor() {
		this.defaultClassNames = {
			HEADER: 'js-header',
			MENU: 'js-menu',
			MENU_TOGGLER: 'js-menu-toggler',
			SEARCH: 'js-search',
			SEARCH_TOGGLER: 'js-search-toggler',
			OPEN_LAYER_MOD: 'is-open',
			ACTIVE_TOGGLER_MOD: 'is-active',
			HEADER_MENU_MOD: 'has-open-menu'
		};

		this.$header = $(`.${this.defaultClassNames.HEADER}`);
		this.$menu = $(`.${this.defaultClassNames.MENU}`, this.$header);
		this.$menuToggler = $(
			`.${this.defaultClassNames.MENU_TOGGLER}`,
			this.$header
		);
		this.$search = $(`.${this.defaultClassNames.SEARCH}`, this.$header);
	}

	init = () => {
		if (!this.$header.length) {
			return;
		}

		this.listenMenuTogglerClick();
		this.listenSearchTogglerClick();
		this.listenResize();
	};

	listenMenuTogglerClick = () => {
		const { HEADER, MENU_TOGGLER, OPEN_LAYER_MOD } = this.defaultClassNames;
		const menuTogglerSelector = `.${HEADER} .${MENU_TOGGLER}`;

		app.dom.$document.on('click', menuTogglerSelector, () => {
			if (this.$menu.hasClass(OPEN_LAYER_MOD)) {
				enableBodyScroll(this.$menu);
				this.setMenuClosed();
			} else {
				disableBodyScroll(this.$menu);
				this.setMenuOpen();
			}
		});
	};

	listenSearchTogglerClick = () => {
		const { HEADER, SEARCH_TOGGLER, OPEN_LAYER_MOD } = this.defaultClassNames;
		const searchTogglerSelector = `.${HEADER} .${SEARCH_TOGGLER}`;

		app.dom.$document.on('click', searchTogglerSelector, () => {
			if (this.$menu.hasClass(OPEN_LAYER_MOD)) {
				enableBodyScroll(this.$menu);
				this.setMenuClosed();
			}

			if (this.$search.hasClass(OPEN_LAYER_MOD)) {
				enableBodyScroll(this.$search);
				this.setSearchClosed();
			} else {
				disableBodyScroll(this.$search);
				this.setSearchOpen();
			}
		});
	};

	listenResize = () => {
		app.dom.$window.on('resize', () => {
			clearAllBodyScrollLocks();
			this.setMenuClosed();
		});
	};

	setMenuOpen = () => {
		const {
			HEADER_MENU_MOD,
			ACTIVE_TOGGLER_MOD,
			OPEN_LAYER_MOD
		} = this.defaultClassNames;

		this.$header.addClass(HEADER_MENU_MOD);
		this.$menuToggler.addClass(ACTIVE_TOGGLER_MOD);
		this.$menu.addClass(OPEN_LAYER_MOD);
	};

	setMenuClosed = () => {
		const {
			HEADER_MENU_MOD,
			ACTIVE_TOGGLER_MOD,
			OPEN_LAYER_MOD
		} = this.defaultClassNames;

		this.$header.removeClass(HEADER_MENU_MOD);
		this.$menuToggler.removeClass(ACTIVE_TOGGLER_MOD);
		this.$menu.removeClass(OPEN_LAYER_MOD);
	};

	setSearchOpen = () => {
		const { OPEN_LAYER_MOD } = this.defaultClassNames;

		this.$search.addClass(OPEN_LAYER_MOD);
	};

	setSearchClosed = () => {
		const { OPEN_LAYER_MOD } = this.defaultClassNames;

		this.$search.removeClass(OPEN_LAYER_MOD);
	};
}
