export default () => {
	const options = {
		rootMargin: '0px'
	};

	function callback(entries, observer) {
		console.log(observer);

		entries.forEach(entry => {
			console.log(entry);
		});
	}

	let observer = new IntersectionObserver(callback, options);
	observer.observe(document.querySelector('#target'));
};
