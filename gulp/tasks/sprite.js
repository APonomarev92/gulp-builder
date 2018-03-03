'use strict';

module.exports = () => {
    $.gulp.task('sprite', () => {
        return $.gulp.src('./src/images/svg/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprites({
                    mode: "symbols",
                    preview: false,
                    svg: {
                        symbols: 'sprite.svg'
                    }
                }
            ))
            .pipe($.gulp.dest('./build/images/i/'));
    });
};