define(function () {
	'use strict';

	var Image = function (attrs) {
		this.width = attrs.width || 0;
		this.height = attrs.height || 0;
		this.name = attrs.name || ''; 
	};

	return Image;
});