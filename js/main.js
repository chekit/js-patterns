require(
	['factory/init'],
	function (factory) {
		'use strict';

		var examples = {
			factory: factory
		};

		window.runExamples = function (example) {
			examples[example].init();
		};
	}
);