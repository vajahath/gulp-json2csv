const gulp = require('gulp');
const converter = require('./index');

gulp.task('default', () => {
	console.log('hi');
});


gulp.task('makeit', () => {
	gulp.src('in.json')
		.pipe(converter())
		.pipe(gulp.dest('out'))
});
