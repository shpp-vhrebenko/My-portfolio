var gulp = require("gulp"),
    browserSync = require('browser-sync'),
    wiredep = require('wiredep').stream,
    gp = require('gulp-load-plugins')(); 


gulp.task('server', function() {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css'
    ]).on('change', browserSync.reload);
});

gulp.task('build:bower', function () {
  gulp.src('./app/*.html')
    .pipe(wiredep({
      derictory: "./app/bower"     
    }))
    .pipe(gulp.dest("./app/"));
});

gulp.task('default', ['server', 'watch']);

