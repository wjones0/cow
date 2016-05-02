var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

// JSLint our TypeScript
gulp.task('jshint', function() {
    return gulp.src(['api/**/*.js', 'routes/**/*.js', 'public/**/*.js', 'app.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function () {
    gulp.watch('**/*.js', ['jshint']);
}); 

gulp.task('build', ['jshint']);

