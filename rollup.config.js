let pkg = require('./package.json');
let buble = require('rollup-plugin-buble');

module.exports = {
  input: 'src/EventBus.js',
  plugins: [
    buble()
  ],
  output: [
    { file: pkg.main, format: 'cjs'},
    { file: pkg.browser, format: 'umd', name: 'EventBus'},
    { file: pkg.module, format: 'es'}
  ]
};