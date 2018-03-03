'use strict';

module.exports = () => {
    $.gulp.task('clean', () => {

        return $.gulp.src('./build', {read: false})
            .pipe($.gp.plumber({errorHandler: $.gp.notify
                    .onError({title: 'Clean Build', message: "<%= error.message %>"})}))
            .pipe($.gp.clean());

    });
};