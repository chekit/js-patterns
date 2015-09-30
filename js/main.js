require(
	[],
	function () {
		'use strict';

		var examples = {};

		window.runExamples = function (example) {
			exemples[example].init();
		};
	}
);