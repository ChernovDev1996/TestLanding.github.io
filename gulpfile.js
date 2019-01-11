var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    reload = browserSync.reload;

var path = {
    build: { //file destination
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },

    src: { //file origin
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    watch: {
        html: 'src/**/*.*',
        js: 'src/js/**/*.js',
        css: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    clean: './build'
};


var config = {
    server: {
        baseDir: './build'
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};


gulp.task('html:build', function (completed) {
    gulp.src('src/*.html')
        .pipe(plumber())
        .pipe(gulp.dest('build/'))
        .pipe(reload({
            stream: true
        }));
    completed();
});



gulp.task('js:build', function (completed) {
    gulp.src(path.src.js)

        .pipe(sourcemaps.init())

        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({
            stream: true
        }));
    completed();
});


gulp.task('style:build', function (completed) {
    gulp.src(path.src.style)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({
            stream: true
        }));
    completed();
});


gulp.task('image:build', function (completed) {
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({
            stream: true
        }));
    completed();

});



gulp.task('fonts:build', function (completed) {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
    completed();
});




gulp.task('build', gulp.series(
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
)
);




gulp.task('watch', function () {
    // gulp.watch('src/**/*.*', ['html:build']);
    // gulp.watch('src/style/**/*.scss', ['style:build']);
    // gulp.watch('src/js/**/*.js', ['js:build']);
    // gulp.watch('src/img/**/*.*', ['image:build']);
    // gulp.watch('src/fonts/**/*.*', ['fonts:build']);
    gulp.watch('src/**/*.*', gulp.series('html:build'));
    gulp.watch('src/style/**/*.scss', gulp.series('style:build'));
    gulp.watch('src/js/**/*.js', gulp.series('js:build'));
    gulp.watch('src/img/**/*.*', gulp.series('image:build'));
    gulp.watch('src/fonts/**/*.*', gulp.series('fonts:build'));
});



gulp.task('webserver', function (completed) {
    browserSync(config);
    completed();
});


gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
    completed();
});



// gulp.task('default', ['build', 'webserver', 'watch']);
gulp.task('default', gulp.series('build', 'webserver', 'watch'));