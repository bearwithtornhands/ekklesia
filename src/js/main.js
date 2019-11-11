import $ from 'jquery';
import setViewportUnits from './helpers/viewportUnits';

import header from './plugins/header';
import initSelects from './plugins/selects';
import sliderDefault from './plugins/sliderDefault';
import sliderBanner from './plugins/sliderBanner';
import sliderVideo from './plugins/sliderVideo';
import inputVisited from './plugins/inputVisited';
import conferenceMap from './plugins/conferenceMap';
import videoCards from './plugins/videoCards';

$(function() {
	header();
	setViewportUnits();
	inputVisited();
	initSelects();
	videoCards();
	sliderBanner();
	sliderVideo();
	sliderDefault();
	conferenceMap();
});
