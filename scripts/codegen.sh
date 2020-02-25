#!/bin/bash -eux

yarn clean

REPO_ROOT=$(git rev-parse --show-toplevel)
cd "${REPO_ROOT}"

SCRIPT_ROOT=$(dirname "${BASH_SOURCE}")
OUTPUT_DIR="${REPO_ROOT}/generated"
TEMPLATE_DIR="${REPO_ROOT}/template"
SWAGGER_JSON="${OUTPUT_DIR}/swagger.json"

source codegen-settings.sh

mkdir -p "${OUTPUT_DIR}"

python "${SCRIPT_ROOT}/preprocess_spec.py" \
    crosskube "${KUBERNETES_BRANCH}" "${SWAGGER_JSON}" kubernetes kubernetes

PLUGIN_VERSION=4.0.3
mvn -f cross-kube.xml compile \
    -Dgenerator.spec.path="${SWAGGER_JSON}" \
    -Dgenerator.output.path="${OUTPUT_DIR}" \
    -Dgenerator.template.path="${TEMPLATE_DIR}" \
    -Dgenerator.client.version="${CLIENT_VERSION}" \
    -Dgenerator.package.name="${PACKAGE_NAME}" \
    -Dopenapi-generator-version="${PLUGIN_VERSION}"

# Cannot generate code for LogsApi correctly
rm -f generated/apis/LogsApi.ts

for f in generated/models/*.ts; do
    g=${f#generated/models/}
    m=${g%%.ts}
    echo "export * from './${m}'" >>generated/models/index.ts
done

cp -rpfv generated/{models,apis} src

tslint --fix src/models/*.ts
tslint --fix src/apis/*.ts

prettier --write src/models/*.ts
prettier --write src/apis/*.ts
