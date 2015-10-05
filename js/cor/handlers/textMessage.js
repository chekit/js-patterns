define(function (require) {
	'use strict';

	var Handler = require('cor/handler'),
		emailHandler = require('cor/handlers/email'),
		smsHandler;

	smsHandler = new Handler('sms', handleSms, emailHandler);

	function handleSms(sms) {
		console.log('sms message is ', sms.msg, 'number is:', sms.num);
	}

	return smsHandler;
});
