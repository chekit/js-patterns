define(function (require) {
	'use strict';

	return {
		init: function () {
			var moduleB = require('pubsub/moduleB');

			moduleB.publishEvent();
			moduleB.publishEvent();
		}
	};
});