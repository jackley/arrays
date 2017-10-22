const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const cssnano = require('gulp-cssnano');
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const reload = browserSync.reload;


// PostCSS plugin to inline @import rules content
// const postCSSimport = require('postcss-import');
// const postCSScssnext = require('postcss-cssnext'); // Use tomorrow's CSS syntax, today
// const precss = require('precss');
// PostCSS Config Array
// const postCSSConfig = [
//   // Sass-like markup in your CSS
//   postCSSimport(),
//   postCSScssnext(),
//   precss(),
// ];

// configuration
const resourcePathPrefix = '';
const destPath = 'dist/'
const config = {
  scripts: {
    src: './' + resourcePathPrefix + 'playground/main.js',
    dest: destPath,
    watch: resourcePathPrefix + 'playground/**/*',
  },
  scripts2: {
    src: './' + resourcePathPrefix + 'src/index.js',
    dest: destPath,
    watch: resourcePathPrefix + 'src/**/*',
  },
  dev: gutil.env.dev,
};


// clean
gulp.task('clean', del.bind(null, ['dist']));


// scripts
const webpackConfig = require('./webpack.config')(config);

gulp.task('scripts', (done) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      gutil.log(gutil.colors.red(err()));
    }
    const result = stats.toJson();
    if (result.errors.length) {
      result.errors.forEach((error) => {
        gutil.log(gutil.colors.red(error));
        notifier.notify({
          title: 'JS Build Error',
          message: error,
        });
      });
    }
    done();
  });
});
gulp.task('scripts2', (done) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      gutil.log(gutil.colors.red(err()));
    }
    const result = stats.toJson();
    if (result.errors.length) {
      result.errors.forEach((error) => {
        gutil.log(gutil.colors.red(error));
        notifier.notify({
          title: 'JS Build Error',
          message: error,
        });
      });
    }
    done();
  });
});



// server
gulp.task('serve', () => {
  browserSync({
    server: {
      baseDir: './',
    },
    notify: false,
    logPrefix: 'BrowserSync',
    // proxy: 'karma.local',
  });

  gulp.task('scripts:watch', ['scripts'], reload);
  gulp.watch(config.scripts.watch, ['scripts:watch']);
  gulp.task('scripts2:watch', ['scripts2'], reload);
  gulp.watch(config.scripts2.watch, ['scripts2:watch']);

});


// default build task
gulp.task('default', ['clean'], () => {
  // define build tasks
  const tasks = [
    'scripts',
    'scripts2',
  ];

  // run build
  runSequence(tasks, () => {
    if (config.dev) {
      gulp.start('serve');
    }
  });
});
