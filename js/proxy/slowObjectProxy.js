define(function (require) {
	'use strict';

	var SlowObjectProxy, slowObjectInstance,
			slowObject = require('proxy/slowObject');

	SlowObjectProxy = function () {
	 	this.someMethod = function () {
	 		var interval;

	 		if (!slowObjectInstance) {
	 			slowObjectInstance = slowObject.init();
	 		} else {
	 			slowObjectInstance.someMethod();
	 		}

	 		interval = window.setInterval(invokeMethodsWhenExists, 100);

	 		function invokeMethodsWhenExists () {
	 			if (slowObjectInstance) {
	 				console.log('proxying some method');
	 				window.clearInterval(interval);

	 				slowObjectInstance.someMethod();
	 			}
	 		}
	 	};
	};

	return {
		init: function () {
			return new SlowObjectProxy();
		}
	};
});