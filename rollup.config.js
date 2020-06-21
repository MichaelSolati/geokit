import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const ts = typescript({
  tsconfigOverride: {
    compilerOptions: {
      module: 'ESNext',
    },
  },
});

const completeBuilds = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    plugins: [ts],
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'Geokit',
    },
    plugins: [ts, terser()],
  },
];

export default completeBuilds;
