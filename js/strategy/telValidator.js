define(function () {
	'use strict';

	return {
		validate: function (value) {
			return (/[0-9]{11}$/g).test(value);
		} 
	};
});