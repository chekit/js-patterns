require(
	[
		'factory/init',
		'pubsub/init',
		'strategy/init',
		'observer/init',
		'cor/init',
		'mediator/init',
		'iterator/init',
		'facade/init'
	],
	function (factory, pubsub, strategy, observer, cor, mediator, iterator, facade) {
		'use strict';

		var examples = {
			factory: factory,
			pubsub: pubsub,
			strategy: strategy,
			observer: observer,
			cor: cor,
			mediator: mediator,
			iterator: iterator,
			facade: facade
		};

		window.runExamples = function (example) {
			examples[example].init();
		};
	}
);