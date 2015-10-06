define(function () {
	'use strict';

	var newInterface = function () {

	};

	newInterface.prototype.doSomethingNew = function (newArg) {
		console.log('doing the ' + newArg + ' thing');
	};

	return new newInterface();	
});
