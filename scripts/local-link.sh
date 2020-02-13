#!/bin/bash -eu

top="$(dirname "${BASH_SOURCE[0]}")/.."

yarn link

(cd "${top}/examples/react-app" && yarn local-link)
