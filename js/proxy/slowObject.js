define(function () {
	'use strict';

	var SlowObject = function () {
		this.someMethod = function () {
			console.log('Some method on the slow object was invoked');
		};
	};

	return {
		init: function () {
			for (var i = 0, max = 1000; i < max; i+= 1) {
				console.log('slowness...');
			}

			return new SlowObject();
		}
	};
});