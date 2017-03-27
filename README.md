<img src="https://raw.githubusercontent.com/vajahath/gulp-json2csv/master/media/logo.jpg" alt="Logo" style="width: 200px;"/>

**Gulp plugin to Convert json to csv format.**

> You can also use this package to convert json to excel format by simply renaming the output extension to excel's extension.

This plugin is backed by [json2csv](https://www.npmjs.com/package/json2csv) module.

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
