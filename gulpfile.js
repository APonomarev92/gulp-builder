'use strict';

global.$ = {

    path: {
        pathTask: require('./gulp/paths/paths')
    },

    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create()
};

$.path.pathTask.forEach((taskPath) => {
    require(taskPath)();
});

// Dev Build
$.gulp.task('default', $.gulp.series(
    $.gulp.parallel(
        'sass',
        'pug',
        'scripts',
        'sprite',
        'images'
    ),
    $.gulp.parallel(
        'inject'
    ),
    $.gulp.parallel(
        'server-watcher'
    )
));

//Production Build
$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug',
        'scripts',
        'images'
    ),
    $.gulp.parallel(
        'inject',
        'size'
    )
));




