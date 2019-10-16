import $ from 'jquery';
import setViewportUnits from './helpers/viewportUnits';

import initSelects from './plugins/selects';
import sliderDefault from './plugins/sliderDefault';
import sliderBanner from './plugins/sliderBanner';
import sliderVideo from './plugins/sliderVideo';
import inputVisited from './plugins/inputVisited';

$(function() {
	setViewportUnits();
	inputVisited();
	initSelects();
	sliderBanner();
	sliderVideo();
	sliderDefault();
});
