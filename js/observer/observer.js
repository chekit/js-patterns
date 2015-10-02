define(function () {
	'use strict';

	var Observer = function (name) {
		this.name = name;
	};

	Observer.prototype.notify = function (event, data) {
		/* eslint-disable */
		console.log('Event: ' + event + ', The data is: ' + data.prop + ', constractor: ' + this.name);
		/* eslint-enable */
	};

	return Observer;
});