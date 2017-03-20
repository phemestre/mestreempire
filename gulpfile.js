'use strict';

// Require Gulp
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var sassdoc = require( 'sassdoc' );
var sourcemaps = require( 'gulp-sourcemaps' );
var prefix = require( 'gulp-autoprefixer' );
var watch = require( 'gulp-watch' );
var livereload = require(  'gulp-livereload'  );

// Gulp Sass Task 
gulp.task( 'sass', function() {
  gulp.src( 'assets/sass/**/*.scss' )  
    .pipe( sourcemaps.init() ) // Initializes sourcemaps
    .pipe( sassdoc() )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( prefix( 'last 2 versions', '> 1%', 'ie 8' ) )
    .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( 'assets/css' ) ) 
    // .pipe( livereload() );
} );

gulp.task( 'watch', function() {
  gulp.watch( 'assets/sass/**/*.scss', [ 'sass' ] ) ;
  // livereload.listen();
} );

gulp.task('default', [ 'sass', 'watch' ] );