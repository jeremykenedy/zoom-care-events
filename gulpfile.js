/*
 |--------------------------------------------------------------------------
 | GULP JS provides a clean, fluent API for defining some basic Gulp tasks
 | for your application. By default, we are compiling the Sass and JS
 | file for our application, as well as publishing vendor resources.
 |--------------------------------------------------------------------------
 */
	var gulp = require('gulp');
	var rename = require('gulp-rename');

/*
 |--------------------------------------------------------------------------
 | Gulp Asset Management - Create Gulp function copyfiles
 |--------------------------------------------------------------------------
 | Copy any needed files.
 | Do a 'gulp' after bower updates
 |--------------------------------------------------------------------------
 */

gulp.task('default', function() {

	/*
	 |--------------------------------------------------------------------------
	 | Copy jQuery Assets
	 |--------------------------------------------------------------------------
	 */
	gulp.src("ui/bower_components/jquery/dist/jquery.js")
		.pipe(gulp.dest("public/js/"));

	gulp.src("ui/bower_components/jquery/dist/jquery.min.js")
		.pipe(gulp.dest("public/js/"));

	/*
	 |--------------------------------------------------------------------------
	 | Copy jquery-dateFormat.js Assets
	 |--------------------------------------------------------------------------
	 */
	gulp.src("ui/bower_components/jquery-dateFormat/dist/jquery-dateFormat.js")
		.pipe(gulp.dest("ui/app/"));


	/*
	 |--------------------------------------------------------------------------
	 | Copy addtocalendar.js Assets
	 |--------------------------------------------------------------------------
	 */
	gulp.src("ui/bower_components/addtocalendar/atc.min.js")
		.pipe(gulp.dest("ui/app/"));



});