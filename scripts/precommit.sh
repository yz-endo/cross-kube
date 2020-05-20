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
    yarn audit --groups=dependencies
)

(
    cd custom/examples/petstore
    if [[ -z "${HTTP_PROXY}" ]]; then
        node ../../../bin/cross-kube.js codegen
    else
        node ../../../bin/cross-kube.js codegen --proxy="${HTTP_PROXY}"
    fi
)
