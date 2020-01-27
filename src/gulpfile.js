const auto        = require( 'autoprefixer-stylus' ),
			nano        = require( 'cssnano' ),
			gulp        = require( 'gulp' ),
			stylus      = require( 'gulp-stylus' ),
			postcss     = require( 'gulp-postcss' ),
			nib         = require( 'nib' ),
			rupture     = require( 'rupture' ),
			typographic = require( 'typographic' );

gulp.task('app', () => {

	const processors = [
		nano
	];

	return gulp.src('./styl/App.styl')
		.pipe(stylus({
			use: [
				nib(),
				rupture(),
				typographic(),
				auto()
			]
		}))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
	gulp.watch('**/*.styl',  gulp.series('app'));
});