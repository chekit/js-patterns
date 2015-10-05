require(
	[
		'factory/init',
		'pubsub/init',
		'strategy/init',
		'observer/init',
		'cor/init'
	],
	function (factory, pubsub, strategy, observer, cor) {
		'use strict';

		var examples = {
			factory: factory,
			pubsub: pubsub,
			strategy: strategy,
			observer: observer,
			cor: cor
		};

		window.runExamples = function (example) {
			examples[example].init();
		};
	}
);