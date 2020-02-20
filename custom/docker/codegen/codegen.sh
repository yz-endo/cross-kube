#!/bin/bash -eu

SWAGGER_YAML="$1"
OUTPUT_DIR="$2"
TEMPLATE_DIR="template"
CLIENT_VERSION="0.1.0"
PACKAGE_NAME="custom-api"

echo "swagger file ${SWAGGER_YAML}"
echo "output directory ${OUTPUT_DIR}"

if [ -z "${HTTP_PROXY}" ]; then
    cat >/tmp/settings.xml <<EOM
<settings>
  <localRepository>/tmp/m2</localRepository>
</settings>
EOM
else
    proto=${HTTP_PROXY%%://*}
    hostport=${HTTP_PROXY#*://}
    host=${hostport%%:*}
    port=${hostport#*:}
    cat >/tmp/settings.xml <<EOM
<settings>
  <localRepository>/tmp/m2</localRepository>
  <proxies>
    <proxy>
      <active>true</active>
      <protocol>${proto}</protocol>
      <host>${host}</host>
      <port>${port}</port>
    </proxy>
  </proxies>
</settings>
EOM
fi

PLUGIN_VERSION=4.0.3
mvn -s /tmp/settings.xml -f codegen.xml compile \
    -Dgenerator.spec.path="${SWAGGER_YAML}" \
    -Dgenerator.output.path="${OUTPUT_DIR}" \
    -Dgenerator.template.path="${TEMPLATE_DIR}" \
    -Dgenerator.client.version="${CLIENT_VERSION}" \
    -Dgenerator.package.name="${PACKAGE_NAME}" \
    -Dopenapi-generator-version="${PLUGIN_VERSION}"

rm -f dest/models/IoK8sApimachinery*

for f in dest/models/*.ts; do
    g=${f#dest/models/}
    m=${g%%.ts}
    echo "export { default as ${m} } from './${m}'" >>dest/models/index.ts
done

sed -i -e 's|\./IoK8sApimachineryPkgApisMeta|cross-kube/lib/models/|;
s|\.\./models/IoK8sApimachineryPkgApisMeta|cross-kube/lib/models/|;
s|IoK8sApimachineryPkgApisMeta||' dest/apis/* dest/models/*

tslint --fix src/models/*.ts
tslint --fix src/apis/*.ts

prettier --write dest/models/*.ts
prettier --write dest/apis/*.ts
