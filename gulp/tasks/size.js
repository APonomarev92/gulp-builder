'use strict';

module.exports = () => {
    $.gulp.task('size', () => {

        const size = $.gp.size();

        return $.gulp.src('./build/**/*.*')
            .pipe($.gp.plumber({errorHandler: $.gp.notify
                    .onError({title: 'Task size', message: "<%= error.message %>"})}))
            .pipe(size)
            .pipe($.gp.notify({
                onLast: true,
                title: 'Build End',
                message: () => `Total size ${size.prettySize}`
            }));

    });
};