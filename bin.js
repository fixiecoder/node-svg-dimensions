#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2), {boolean: ['w', 'h', 'width', 'height']});
var svgDim = require('./');

var width  = argv.w || argv.width;
var height = argv.h || argv.height;

svgDim.get(argv._[0], function(err, dims) {
	if(err) {
		console.error(err.stack);
		process.exit(1);
	}

	if(width === height) { // both true or both false
		console.log(dims.width + '×' + dims.height);
	} else if(width) {
		console.log(dims.width);
	} else if(height) {
		console.log(dims.height);
	}
})
