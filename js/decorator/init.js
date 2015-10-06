define(function (require) {
	'use strict';

	return {
		init: function () {
			var user1, user2,
					User = require('decorator/user'),
					execDecorator = require('decorator/decorators/exec'),
					adminDecorator = require('decorator/decorators/admin');

			/* User 1*/
			user1 = new User('user1');
			user1.decoratePermissions(execDecorator);

			/* User 2*/
			user2 = new User('user2');
			user2.decoratePermissions(adminDecorator);

			/*eslint-disable*/
			console.log(user1.getPermissions());
			console.log(user2.getPermissions());
			/*eslint-enable*/
		}
	};
});