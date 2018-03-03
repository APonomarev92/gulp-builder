'use strict';

module.exports = () => {
    $.gulp.task('sass', () => {
        return $.gulp.src('./src/sass/main.scss')
            .pipe($.gp.plumber({errorHandler: $.gp.notify
                    .onError({title: 'Styles', message: "<%= error.message %>"})}))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe($.gp.concat('styles.css'))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.pxToRem({rootPX:16}))
            .pipe($.gulp.dest('./build/css'));
    });
}