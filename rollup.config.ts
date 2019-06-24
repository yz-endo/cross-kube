import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import multiinput from 'rollup-plugin-multi-input'
import sourcemaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import replace from 'rollup-plugin-replace'

const pkg = require('./package.json')
const external = [...Object.keys(pkg.peerDependencies || {}), 'debug']
const watch = {
  include: 'src/**'
}
const plugins = [
  json(),
  resolve(),
  typescript({
    useTsconfigDeclarationDir: true,
    verbosity: 2
  }),
  commonjs(),
  sourcemaps()
]

export default [
  {
    input: ['src/**/[^\.]+.ts'],
    output: {
      dir: 'lib',
      format: 'esm',
      sourcemap: true,
      banner: '/* eslint-disable */'
    },
    external,
    watch,
    plugins: [
      multiinput(),
      replace({
        'process.browser': 'false'
      }),
      ...plugins
    ]
  },
  {
    input: {
      runtime: 'src/runtime.ts'
    },
    output: {
      dir: 'lib/browser',
      format: 'esm',
      sourcemap: true,
      banner: '/* eslint-disable */'
    },
    external,
    watch,
    plugins: [
      replace({
        'process.browser': 'true'
      }),
      ...plugins
    ]
  },
  {
    input: {
      runtime: 'src/index.all.ts'
    },
    output: {
      dir: 'lib',
      format: 'esm',
      sourcemap: true,
      banner: '/* eslint-disable */'
    },
    external,
    watch,
    plugins: [
      replace({
        'process.browser': 'false'
      }),
      ...plugins
    ]
  }
]
