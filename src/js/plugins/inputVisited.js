import app from '../helpers/app';

export default () => {
	app.dom.$document.on('focus', 'input, textarea', event => {
		$(event.currentTarget).addClass('is-visited');
	});
};
