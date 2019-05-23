const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;

// Copy All HTML files
gulp.task('copyHTML', () => {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('copyCSS', () => {
  gulp.src('src/css/*.css').pipe(gulp.dest('dist/css'));
});

gulp.task('copyJS', () => {
  gulp.src('src/js/*.js').pipe(gulp.dest('dist/js'));
});

// Optimize Images
gulp.task('minIMG', () => {
  gulp
    .src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task(
  'default',
  gulp.parallel(['copyHTML', 'copyCSS', 'minIMG', 'copyJS'])
);

gulp.task('watch', () => {
  gulp.watch('src/js/*.js', ['copyJS']);
  gulp.watch('src/img/*', ['minIMG']);
  gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch('src/css/*.css', ['copyCSS']);
});
