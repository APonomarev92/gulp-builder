'use strict';

module.exports = () => {
    $.gulp.task('images', () => {

        return $.gulp.src('./src/images/*.*')
            .pipe($.gp.plumber({errorHandler: $.gp.notify
                    .onError({title: 'Compress Images', message: "<%= error.message %>"})}))
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest('./build/'))

    });
};