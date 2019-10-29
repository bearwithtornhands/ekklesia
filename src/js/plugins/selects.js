import Select from '../classes/select';

export default () => {
	const $select = $('.js-select');

	if (!$select.length) {
		return;
	}

	$select.each((index, select) => {
		new Select($(select)).init();
	});
};
