const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
    return gulp.src(['src/*.js', 'gulpfile.js', 'commitValidator.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format());
});
