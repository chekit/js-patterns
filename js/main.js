require(
	['factory/init', 'pubsub/init'],
	function (factory, pubsub) {
		'use strict';

		var examples = {
			factory: factory,
			pubsub: pubsub
		};

		window.runExamples = function (example) {
			examples[example].init();
		};
	}
);