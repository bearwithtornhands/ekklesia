import $ from 'jquery';
import setViewportUnits from './helpers/viewportUnits';

import initSelects from './plugins/selects';
import sliderBanner from './plugins/sliderBanner';
import observer from './plugins/observer';

$(function() {
	setViewportUnits();
	initSelects();
	sliderBanner();
});
