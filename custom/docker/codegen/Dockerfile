FROM maven:3.5-jdk-8-slim

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update && apt-get -y install nodejs python-pip && pip install urllib3
RUN npm install -g prettier tslint@^5.15.0 tslint-config-prettier@^1.15.0 \
    tslint-config-standard@^8.0.1 tslint-plugin-prettier@^2.0.1 typescript@^3.4.1

COPY codegen.xml /
COPY template/ /template/
COPY codegen.sh /
COPY .prettierrc /
COPY tslint.json /

ENTRYPOINT ["/codegen.sh"]

CMD ["/src/swagger.yaml", "/dest"]
