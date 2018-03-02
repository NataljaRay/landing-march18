/*
 *
 * Определяем переменные
 *
 */
var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    scss        = require('gulp-sass'),
    //less        = require('gulp-less'),
    pug         = require('gulp-pug'),
    concat      = require('gulp-concat');

/*
 *
 * Создаем задачи (таски)
 *
 */
// Задача "scss". Запускается командой "gulp scss"
gulp.task('scss', function () {
    return gulp.src(['app/scss/main.scss'])
        .pipe(scss())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}))
});

// старая версия
// gulp.task('scss', function () {
//   return gulp.src(['app/scss/**/*.scss'])
//     .pipe(scss())
//     .pipe(concat('all.css'))
//     .pipe(gulp.dest('dist/css'))
//     .pipe(browserSync.reload({stream: true}))
// });

// Задача "less". Запускается командой "gulp less"
// gulp.task('less', function () {
//     // return gulp.src(['app/less/**/*.less'])
//     return gulp.src(['app/less/main.less'])
//         .pipe(less())
//         .pipe(concat('style.css'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(browserSync.reload({stream: true}))
// });


// Задача "js". Запускается командой "gulp js"
gulp.task('js', function () {
    return gulp.src(['app/js/**'])
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true}))
});

// Задача "image". Запускается командой "gulp image"
gulp.task('image', function() {
  gulp.src(['app/img/**/*.*'])
    .pipe(gulp.dest('dist/img'))
});
// Задача "assets". Запускается командой "gulp assets"
gulp.task('assets', function() {
  gulp.src(['app/assets/**/*.*'])
    .pipe(gulp.dest('dist/assets'))
});

// Задача "image". Запускается командой "gulp image"
gulp.task('fonts', function() {
    gulp.src(['app/fonts/**/*.*'])
        .pipe(gulp.dest('dist/fonts'))
});

// Задача "pug". Запускается командой "gulp pug"
gulp.task('pug',function() {
  gulp.src(['app/pug/**/*.pug','!app/pug/blocks/**/*.pug'])
  // gulp.src(['app/pug/**/*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});

gulp.task('build',[
    'fonts',
    'assets',
    'image',
    'scss',
    'js',
    'pug'
]);

// Задача "watch". Запускается командой "gulp watch"
// Она следит за изменениями файлов и автоматически запускает другие задачи
// gulp.task('watch', ['browser-sync', 'scss', 'js', 'pug', 'image'],function () {
gulp.task('watch', ['browser-sync', 'scss', 'js', 'pug', 'image', 'assets'],function () {
    gulp.watch('app/scss/**/*.scss', ['scss']);
    // gulp.watch('app/less/**/*.less', ['less']);
    gulp.watch('app/js/**/*.js', ['js']);
    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch(['app/pug/**/*.pug','app/pug/blocks/**/*.pug'], ['pug']);
    gulp.watch(['app/img/**'], ['image']);
    gulp.watch(['app/assets/**'], ['assets']);
    gulp.watch(['app/fonts/**'], ['fonts']);
    gulp.watch('app/*.html', browserSync.reload);

});

