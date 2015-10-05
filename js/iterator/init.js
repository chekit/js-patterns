define(function (require) {
	'use strict';

	return {
		init: function () {
			var iterator = require('iterator/iterator'),
					testArray = [
						{something: 'yay', other: 123},
						{something: 'twst', other: 456}
					],
					myArrayIterator = iterator.build(testArray),
					testString = 'teststring',
					myStringIterator = iterator.build(testString);

					/*eslint-disable*/
					console.log(myArrayIterator.next());
					console.log(myArrayIterator.next());
					/*eslint-enable*/

					while(!myStringIterator.isDone()) {
						/*eslint-disable*/
						console.log(myStringIterator.next());
						/*eslint-enable*/
					}

					/*eslint-disable*/
					console.log(myStringIterator.reset().take(4).join(''));
					/*eslint-enable*/
		}
	};
});