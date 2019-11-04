import app from '../helpers/app';

export default () => {
	if (window.innerWidth >= app.breakpoints.tablet) {
		ymaps.ready(() => {
			const conferenceMap = new ymaps.Map('conferenceMap', {
				center: [55.76, 37.64],
				zoom: 10,
				controls: []
			});

			var myPlacemark = new ymaps.Placemark(
				[55.8, 37.6],
				{},
				{ preset: 'islands#redIcon' }
			);
			conferenceMap.geoObjects.add(myPlacemark);
		});
	}
};
