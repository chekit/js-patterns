require(
	[
		'factory/init',
		'pubsub/init',
		'strategy/init',
		'observer/init',
		'cor/init',
		'mediator/init'
	],
	function (factory, pubsub, strategy, observer, cor, mediator) {
		'use strict';

		var examples = {
			factory: factory,
			pubsub: pubsub,
			strategy: strategy,
			observer: observer,
			cor: cor,
			mediator: mediator
		};

		window.runExamples = function (example) {
			examples[example].init();
		};
	}
);