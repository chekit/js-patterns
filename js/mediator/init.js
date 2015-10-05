define(function (require) {
	'use strict';

	return {
		init: function () {
			var mediator, colleague1, colleague2, colleague3,
				Mediator = require('mediator/mediator'),
				Colleague = require('mediator/colleague');

			mediator = new Mediator();
			colleague1 = Colleague.create('colleague1', mediator);
			colleague2 = Colleague.create('colleague2', mediator);
			colleague3 = Colleague.create('colleague3', mediator);

			colleague1.sendMessage('Hi there', 'colleague2');
			colleague2.sendMessage('Hi there colleague 1', 'colleague1');
			colleague3.sendMessage('Hello guys');
		}
	};
});