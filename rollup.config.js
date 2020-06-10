import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const plugins = [
  typescript({
    tsconfigOverride: {
      compilerOptions: {
        module: 'ESNext',
      },
    },
  }),
];

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
      extend: true,
    },
    plugins: [
      ...plugins,
      terser()
    ]
  },
];

export default [...completeBuilds];