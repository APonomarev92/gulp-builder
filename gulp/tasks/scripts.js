'use strict';

module.exports = () => {
    $.gulp.task('scripts', () => {
        return $.gulp.src('./src/js/*.js')
            .pipe($.gp.plumber({errorHandler: $.gp.notify
                    .onError({title: 'Scripts', message: "<%= error.message %>"})}))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.babel({
                presets: ['env']
            }))
            .pipe($.gp.concat('main.js'))
            .pipe($.gp.uglify())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./build/js'));
    });
}