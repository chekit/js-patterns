define(function (require) {
	'use strict';

	var pubSub = require('pubsub/pubsub'),
		subscription;

	subscription = pubSub.subscribe('atopic', function (data) {
		/* eslint-disable*/
		console.log('atopic was published with data:' + data);
		/* eslint-enable*/
		subscription.dispose();
	});
});
