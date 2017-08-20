var paths = {
	sass      : ['source/sass/main.sass'],
	watchsass : ['source/sass/**'],
	js        : ['source/js/*.js'],
	html      : ['source/*.html']
};

var gulp      = require('gulp'),
	sass        = require('gulp-sass'),
	livereload  = require('gulp-livereload'),
	minifyCss   = require('gulp-minify-css'),
	browserSync = require('browser-sync'),
	gcmq        = require('gulp-group-css-media-queries'),
	csso        = require('gulp-csso'),
	autoprefix  = require('gulp-autoprefixer');

var reload = browserSync.reload;

gulp.task('compile-sass', function() {
	return gulp.src(paths.sass)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefix('last 10 versions'))
		//.pipe(minifyCss())
		//.pipe(csso({
		//	restructure: false,
		//	sourceMap: true,
		//	debug: true
		//})) //on production just .pipe(csso())
		//.pipe(gcmq())
		.pipe(gulp.dest('source/css'))
		//.pipe(notify('SASS compiled.'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('watcher', function(){
	gulp.watch(paths.watchsass, ['compile-sass']);

	gulp.watch(paths.html, function(){
		gulp.src(paths.html)
			.pipe(browserSync.reload({stream: true}));
	});

	gulp.watch(paths.js, function(){
		gulp.src(paths.js)
			.pipe(browserSync.reload({stream: true}));
	});
});

gulp.task('browser-sync', function() {
	browserSync({
		server : { baseDir: "./source" },
		port   : 8080,
		open   : true,
		notify : false
	});
});

gulp.task('default', ['browser-sync', 'watcher']);
