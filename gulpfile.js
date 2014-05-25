var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');

var handleErrors = function (error) {
 	return 'Error on line' + error.line + ' :' + error.message;
};

gulp.task('scripts', function() {
  gulp
    .src([
      './bower_components/jquery/dist/jquery.js',
      './bower_components/bootstrap/dist/js/bootstrap.js',
      './bower_components/angular/angular.js',
      './bower_components/angular-route/angular-route.js',
      './bower_components/firebase/firebase.js',
      './bower_components/angularfire/angularfire.js',
      './bower_components/angular-strap/dist/angular-strap.js',
      './bower_components/angular-strap/dist/angular-strap.tpl.js',
      './bower_components/firebase-simple-login/firebase-simple-login.js',
      './app/src/app.js',
      './app/src/services/*.js',
      './app/src/controllers/*.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./app/build/'));
});

gulp.task('less', function() {
  gulp.src('./app/src/style.less')
  	.pipe(less({ compress: true }))
  	.on('error', notify.onError(handleErrors))
    .pipe(prefix('last 2 Chrome versions'))
    .pipe(gulp.dest('./app/build/'));
});

gulp.task('jade', function() {
	gulp.src('./app/src/layout.jade')
		.pipe(jade())
		.on('error', notify.onError(handleErrors))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./app/build/'));

  gulp.src('./app/src/templates/*.jade')
    .pipe(jade())
    .on('error', notify.onError(handleErrors))
    .pipe(gulp.dest('./app/build/templates/'));
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.js', ['scripts']);
  gulp.watch('./app/**/*.jade', ['jade']);
  gulp.watch('./app/**/*.less', ['less']);
});

gulp.task('default', ['scripts', 'less', 'jade', 'watch']);
