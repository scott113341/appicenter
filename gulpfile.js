var gulp = require('gulp');
var browserify = require('browserify');
var angular = require('angular');
var less = require('gulp-less');
var jade = require('gulp-jade');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var prefix = require('gulp-autoprefixer');

var handleErrors = function (error) {
 	return 'Error on line' + error.line + ' :' + error.message;
}

gulp.task('scripts', function() {
  browserify('./dashboard/src/app.js')
  .bundle({debug: true})
  .on('error', notify.onError(handleErrors))
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./dashboard/build/'));

});

gulp.task('less', function() {
  gulp.src('./dashboard/src/style.less')
  	.pipe(less({ compress: true }))
  	.on('error', notify.onError(handleErrors))
    .pipe(prefix('last 2 Chrome versions'))
  	.pipe(gulp.dest('./dashboard/build/'));
});

gulp.task('jade', function() {

	gulp.src('./dashboard/src/layout.jade')
		.pipe(jade())
		.on('error', notify.onError(handleErrors))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./dashboard/build/'));

  gulp.src('./dashboard/src/templates/*.jade')
    .pipe(jade())
    .on('error', notify.onError(handleErrors))
    .pipe(gulp.dest('./dashboard/build/templates/'));

});

gulp.task('default', ['scripts', 'less', 'jade', 'watch']);

gulp.task('watch', function() {
  gulp.watch('./dashboard/**/*.js', ['scripts']);
  gulp.watch('./dashboard/**/*.jade', ['jade']);
  gulp.watch('./dashboard/**/*.less', ['less']);
});
