'use strict';

module.exports = () => {
    $.gulp.task('inject', () => {

        return $.gulp.src('./build/*.html')
            .pipe($.gp.inject($.gulp.src(
                ['./build/**/*.js', './build/**/*.css'],
                {read: false}),
                {relative: true}
            ))
            .pipe($.gulp.dest('./build'));
    });
};