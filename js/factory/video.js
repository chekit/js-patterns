define(function () {
	'use strict';

	var Video = function (attrs) {
		this.length = attrs.length || 0;
		this.name = attrs.name || ''; 
	};

	return Video;
});