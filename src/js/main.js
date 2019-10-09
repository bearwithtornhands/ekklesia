import $ from 'jquery';
import setViewportUnits from './helpers/viewportUnits';

import initSelects from './plugins/selects';
import sliderDefault from './plugins/sliderDefault';
import sliderBanner from './plugins/sliderBanner';
import sliderVideo from './plugins/sliderVideo';
import observer from './plugins/observer';

$(function() {
	setViewportUnits();
	initSelects();
	sliderBanner();
	sliderVideo();
	sliderDefault();
});
