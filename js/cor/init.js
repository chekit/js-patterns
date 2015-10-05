define(function (require) {
	'use strict';

	return {
		init: function () {
			var call, sms, email, handler,
				Handler = require('cor/handler'),
				callHandler = require('cor/handlers/call');

			call = {
				type: 'call',
				num: '07218921739',
				ownNumber: '07232940720'
			};

			sms = {
				type: 'sms',
				num: '07218921739',
				msg: 'Hi there! How r u?'
			};

			email = {
				type: 'email',
				recipient: 'example@mail.net',
				msg: 'This is email message. Hello world!'
			};

			handler = new Handler(null, null, callHandler);

			handler.handleRequest(email);
			handler.handleRequest(sms);
			handler.handleRequest(call);
		}
	};
});