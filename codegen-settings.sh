#!/bin/bash

# Kubernetes branch to get the OpenAPI spec from.
export KUBERNETES_BRANCH="release-1.14"

# client version for packaging and releasing. It can
# be different than SPEC_VERSION.
export CLIENT_VERSION="0.1.0"

# Name of the release package
export PACKAGE_NAME="cross-kube"
