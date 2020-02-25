#!/bin/bash -eu

rm -rf lib

node --max-old-space-size=8192 node_modules/rollup/dist/bin/rollup -c rollup.config.ts
