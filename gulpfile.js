const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const del = require('del');

gulp.task('lint', () => {
  return gulp.src(['src/*.js', 'gulpfile.js', 'commitValidator.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

/**
 * Clears the build dir before transpiling.
 */
gulp.task('clean', function () {
  return del('build/**/*');
});

/**
 * compile-backend and compile-server-n-logger
 * transpiles server side code from es6 to es5
 * and save to the build folder
 */
gulp.task('compile-backend', ['clean'], function () {
  return gulp.src('server/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build/server'));
});

gulp.task('compile-server-n-logger', function () {
  return gulp.src(['server.js', 'Logger.js'])
    .pipe(babel())
    .pipe(gulp.dest('build'));
});

gulp.task('server-files', [ 'compile-backend', 'compile-server-n-logger']);

gulp.task('watch-server', () => {
  gulp.watch(['server.js', 'Logger.js', 'server/**/*.js'], ['server-files']);
});
