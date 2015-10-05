define(function (require) {
	'use strict';

	var Handler = require('cor/handler'),
		smsHandler = require('cor/handlers/textMessage'),
		callHandler;

	callHandler = new Handler('call', handleCall, smsHandler);

	function handleCall(call) {
		console.log('Call number: ', call.num, 'from number:', call.ownNumber);
	}

	return callHandler;
});
