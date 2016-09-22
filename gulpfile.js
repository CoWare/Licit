const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('eslint', ()=>{
   return gulp.src(['src/*.js', 'gulpfile.js', '!node_modules/**'])
       .pipe( eslint({configFile: '.eslintrc'}) )
       .pipe(eslint.format());
});