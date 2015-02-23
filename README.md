# node-svg-dimmensions
Returns the height and width attributes of an svg image.

## Usage

```
var svgDim = require('svg-dimensions');

var path = '/local/file/example.svg';

svgDim.get(path, function(err, dimensions) {
	if (err) console.log(err);
	var height = dimensions.height;
	var width = dimensions.width;
});
```