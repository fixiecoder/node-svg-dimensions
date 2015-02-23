function get(path, callback) {
	var fs = require('fs');
	var parseString = require('xml2js').parseString;
	
	var attrToLowerCase = function(name) {
		return name.toLowerCase();
	}

	var parseString = require('xml2js').parseString;
	var height = null;
	var width = null;

	fs.readFile(path, {encoding:'utf8'}, function(err, data) { 
		if (err)  return callback(err); 
		 parseString(data, {strict: false, attrkey:'ATTR', attrNameProcessors:[attrToLowerCase]}, function (err, result) {
		 	if (err)  return callback(err); 
		 	var hasWidthHeightAttr = result.SVG.ATTR['width'] && result.SVG.ATTR['height'];
		 	if (hasWidthHeightAttr) {
		 		height = result.SVG.ATTR['height'];
		 		width = result.SVG.ATTR['width'];
		 	} else {
		 		width = result.SVG.ATTR['viewbox'].toString().replace(/^\d+\s\d+\s(\d+\.?[\d])\s(\d+\.?[\d])/, "$1");
		 		height = result.SVG.ATTR['viewbox'].toString().replace(/^\d+\s\d+\s(\d+\.?[\d])\s(\d+\.?[\d])/, "$2");
		 	}
		 	callback(null, {height: parseFloat(height), width: parseFloat(width)});
		 });
	});
}

module.exports.get = get;