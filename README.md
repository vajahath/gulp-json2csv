Convert json to csv format.

> **This package is in Beta**

> a more clearer documentation is on the way.

## Install

```
$ npm install --save-dev gulp-json2csv
```

## Usage

```js
const gulp = require('gulp');
const json2csv = require('gulp-json2csv');

gulp.task('default', function() {
	gulp.src('src/file.json')
		.pipe(json2csv())
		.pipe(gulp.dest('dist'))
);
```
## Example

input:
```json
[
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
]
```
output =>
```
"car", "price", "color"
"Audi", 40000, "blue"
"BMW", 35000, "black"
"Porsche", 60000, "green"
```

## License

MIT © [Vajahath Ahmed](https://facebook.com/vajahath.ahmed)