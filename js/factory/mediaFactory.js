define(function (require) {
	'use strict';

	var media = {
		Video: require('factory/video'),
		Image: require('factory/images'),
		File: require('factory/file')
	};

	return {
		createMedia: function (type, attrs) {
			var MediaType = media[type];

			return new MediaType(attrs);
		}
	};
});