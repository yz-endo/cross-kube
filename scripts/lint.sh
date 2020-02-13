#!/bin/bash

tslint  --project tsconfig.json -t codeFrame 'src/**/*.ts' 'test/**/*.ts'
