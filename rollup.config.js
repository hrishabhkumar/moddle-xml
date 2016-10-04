import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupJson from 'rollup-plugin-json';
import rollupInject from 'rollup-plugin-inject';
import rollupBabel from 'rollup-plugin-babel';

import path from 'path';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  moduleName: 'ModdleXML',
  format: 'iife',
  plugins: [
    rollupNodeResolve({
      main: true,
      browser: true,
      extensions: [ '.js' ],
      preferBuiltins: false
    }),
    rollupInject({
      // control which files this plugin applies to
      // with include/exclude
      include: '**/*.js'
    }),
    rollupJson(),
    rollupBabel({
      babelrc: false,
      presets: [ 'es2015-rollup'],
      plugins: [ 'lodash' ]
    })
  ]
};