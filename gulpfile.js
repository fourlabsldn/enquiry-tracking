/* eslint-disable quote-props */
// List all available tasks

const src = 'src';
const dest = 'dist';
const path = require('path');

const organiser = require('gulp-organiser');
organiser.registerAll('./gulp-tasks', {
  'sass': {
    src: path.join(src, 'style.scss'),
    dest,
  },
  'link-dependencies': {
    dest: './dist/dependencies',
  },
  'copy-static': {
    src: [path.join(src, '*.png'), path.join(src, '*.html')],
    dest,
  },
  'browser-sync': {
    src: '.', // it doesn't matter, it's just so the task object is not ignored.
    reloadOn: ['sass'], // reload page when these tasks happen
    startPath: 'dist/index.html',
    baseDir: './',
  },
});
