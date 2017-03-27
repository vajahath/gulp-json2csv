/*global describe it*/

var assert = require('assert');
var File = require('vinyl');
var converter = require('../');

describe('gulp-json2csv', function() {
	describe('in buffer mode', function() {

		it('should successfully convert to csv', function(done) {
			// create the fake file
			var fakeFile = new File({
				contents: new Buffer('' +
					'[' +
					'{' +
					'"car": "Audi",' +
					'"price": 40000,' +
					'"color": "blue"' +
					'}, {' +
					'"car": "BMW",' +
					'"price": 35000,' +
					'"color": "black"' +
					'}, {' +
					'"car": "Porsche",' +
					'"price": 60000,' +
					'"color": "green"' +
					'}' +
					']')
			});

			// Create a converter plugin stream
			var converted = converter(fakeFile);

			// write the fake file to it
			converted.write(fakeFile);

			// wait for the file to come back out
			converted.once('data', function(file) {
				// make sure it came out the same way it went in
				assert(file.isBuffer());

				// check the contents
				assert.equal(file.contents.toString('utf8'), '"car","price","color"\n' +
					'"Audi",40000,"blue"\n' +
					'"BMW",35000,"black"\n' +
					'"Porsche",60000,"green"');
				done();
			});

		});

	});
});
