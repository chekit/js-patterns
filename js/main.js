require(
	['factory/init', 'pubsub/init', 'strategy/init'],
	function (factory, pubsub, strategy) {
		'use strict';

		var examples = {
			factory: factory,
			pubsub: pubsub,
			strategy: strategy
		};

		window.runExamples = function (example) {
			examples[example].init();
		};
	}
);