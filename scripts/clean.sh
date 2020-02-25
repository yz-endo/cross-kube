#!/bin/bash -eu

REPO_ROOT=$(git rev-parse --show-toplevel)
OUTPUT_DIR="${REPO_ROOT}/generated"

SRC_DIR="${REPO_ROOT}/src"

rimraf "${OUTPUT_DIR}"
rimraf "${SRC_DIR}/"{models,apis}
