// load plugins
var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    jshint = require('gulp-jshint');

//inline css task
gulp.task('inlineCss', function() {
        return gulp.src('src/html/*.html')
        .pipe(inlineCss({
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest('app/'));;
});

// default just runs 'gulp watch'
gulp.task('default', function() {
    gulp.run('watch');
});

// watch
gulp.task('watch', function() {
    gulp.run('inlineCss');
});
