#!/bin/bash -eu

lint-staged
yarn test
yarn audit

yarn build

(
    cd examples/react-app
    yarn link cross-kube
    yarn
    CI=true SKIP_PREFLIGHT_CHECK=true yarn test
    yarn audit
)
