define(function () {
	'use strict';

	var Mediator = function () {
		this.colleagues = [];
	};

	Mediator.prototype.register = function (colleague) {
		this.colleagues.push(colleague);
	};

	Mediator.prototype.send = function (recipientId, msg) {
		this.colleagues.some(function (colleague) {
			if (colleague.id === recipientId) {
				return colleague.recieveMessage(msg);
			}
		});
	};

	Mediator.prototype.broadcast = function (msg, sender) {
		this.colleagues.forEach(function (colleague) {
			if (colleague.id !== sender.id) {
				colleague.recieveMessage(msg);
			}
		});
	};
 
	return Mediator;
});