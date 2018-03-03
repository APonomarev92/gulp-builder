'use strict';

module.exports = () => {
    $.gulp.task('pug', () => {
        return $.gulp.src('./src/pug/pages/*.pug')
            .pipe($.gp.plumber({errorHandler: $.gp.notify
                    .onError({title: 'Pug', message: "<%= error.message %>"})}))
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('./build'))
    });
};