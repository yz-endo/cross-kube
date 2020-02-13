import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import multiinput from 'rollup-plugin-multi-input'
import sourcemaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'

const pkg = require('./package.json')

export default [
  {
    input: ['src/**/*.ts'],
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      banner: '/* eslint-disable */'
    },
    external: Object.keys(pkg.dependencies),
    watch: {
      include: 'src/**'
    },
    plugins: [
      multiinput(),
      json(),
      resolve(),
      typescript({
        useTsconfigDeclarationDir: true,
        verbosity: 2
      }),
      commonjs(),
      sourcemaps()
    ]
  }
]
