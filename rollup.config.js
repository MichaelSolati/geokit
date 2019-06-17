import copier from 'rollup-plugin-copier';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const plugins = [
  typescript({
    typescript: require('typescript')
  })
];

const copy = copier({
  items: [{
    src: 'src/definitions.ts',
    dest: 'dist/definitions.ts',
    createPath: true
  }]
});

const completeBuilds = [{
    input: 'src/index.ts',
    output: [{
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'window',
      extend: true
    },
    plugins: [
      ...plugins,
      uglify(),
      copy
    ]
  },
];

export default [...completeBuilds];