'use strict';

module.exports = () => {
    $.gulp.task('server-watcher', () => {
        $.bs.init({
            server: {
                baseDir: "./build"
            }
        });
        $.bs.watch('./src/**/*.*').on('change', $.bs.reload)
        $.bs.watch('./src/sass/**/*.scss').on('change', $.gulp.series('sass'))
        $.bs.watch('./src/pug/**/*.pug').on('change', $.gulp.series('pug', 'inject'))
        $.bs.watch('./src/js/**/*.js').on('change', $.gulp.series('scripts'))
        $.bs.watch('./src/images/**/*.*').on('change', $.gulp.series('images'))
        $.bs.watch('./src/fonts/**/*.*').on('change', $.gulp.series('fonts'))
    });
};