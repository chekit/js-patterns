define(function (require) {
	'use strict';

	return {
		init: function () {
			var myVideo, myImage, myFile,
				mediaFactory = require('factory/mediaFactory');

			myVideo = mediaFactory.createMedia('Video', {
				length: 3.5,
				name: 'My video'
			});

			myImage = mediaFactory.createMedia('Image', {
				width: 100,
				height: 100,
				name: 'My image'
			});

			myFile = mediaFactory.createMedia('File', {
				size: '3.5Mb',
				name: 'My file'
			});

			/*eslint-disable */
			console.log(myVideo);
			console.log(myImage);
			console.log(myFile);
			/*eslint-enable */
		}
	};
});