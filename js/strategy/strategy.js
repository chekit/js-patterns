define(function () {
	'use strict';

	function Validator() {}

	Validator.prototype.selectValidator = function (validator) {
		this.validator = validator;

		return this;
	};

	Validator.prototype.validate = function (value) {
		if (this.validator) {
			//Call Derfined Validator
			return this.validator.validate(value);
		}

		throw new Error('No validator specified!');
	};

	return Validator;
});