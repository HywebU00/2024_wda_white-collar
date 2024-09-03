const gulp = require('gulp');
gulp.task('default', function (done) {
  (sass = require('gulp-sass')), (postcss = require('gulp-postcss'));
  autoprefixer = require('autoprefixer');
  var sourcemaps = require('gulp-sourcemaps');
  var browserSync = require('browser-sync').create();
  cssbeautify = require('gulp-cssbeautify');
  var beautify = require('gulp-beautify');

  //_______ task for scss folder to css main style
  gulp.task('watch', changeScss);
  function changeScss() {
    console.log('Command executed successfully compiling SCSS in assets.');
    return gulp
      .src('2024_wda/assets/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write(''))
      .pipe(gulp.dest('2024_wda/assets/css'))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      );
  }
  const { watch } = require('gulp');
  //______監聽 sass更動
  watch(['2024_wda/assets/scss/**/*.scss'], gulp.parallel(changeScss));

  //_______task for style-dark
  gulp.task('dark', function () {
    return gulp.src('2024_wda/assets/css/style-dark.scss').pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write('.')).pipe(gulp.dest('2024_wda/assets/css'));
  });

  //_______task for style-transparent
  gulp.task('transparent', function () {
    return gulp.src('2024_wda/assets/css/style-transparent.scss').pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write('.')).pipe(gulp.dest('2024_wda/assets/css'));
  });

  //_______task for skinmodes
  gulp.task('skin', function () {
    return gulp.src('2024_wda/assets/css/skin-modes.scss').pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write('.')).pipe(gulp.dest('2024_wda/assets/css'));
  });
  done();
});
