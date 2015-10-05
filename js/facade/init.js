define(function (require) {
	'use strict';

	return {
		init: function () {
			var facade = require('facade/facade');

			/*eslint-disable*/
			console.log(facade.processThing('Hello world!'));
			console.log(facade.processThing(500));
			console.log(facade.processThing(true));
			console.log(facade.processThing([1, 'b', 'ololo']));
			console.log(facade.processThing({value1: 'Hello', value2: 'Anton'}));
			/*eslint-enable*/
		}
	};
});