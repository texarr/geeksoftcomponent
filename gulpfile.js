var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'compressed', sourceComments: 'map'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('css/**/*.css').on('change', browserSync.reload);
  gulp.watch('js/*.js').on('change', browserSync.reload);
});
