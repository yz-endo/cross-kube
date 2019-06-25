# cross-kube Development

## Prerequisites

* Node.js >= 8
* [Yarn](https://yarnpkg.com/)
* Python and [urllib3](https://urllib3.readthedocs.io/en/latest/)
* Java
* Maven

### Proxy Server

If you use a proxy server, set the environment variables

```sh
export HTTP_PROXY=http://your-proxy.example.com:8080
export HTTPS_PROXY=http://your-proxy.example.com:8080
```

and also edit `$HOME/.m2/settings.xml`:

```xml
<settings>
  <proxies>
   <proxy>
      <active>true</active>
      <protocol>http</protocol>
      <host>your-proxy.example.com</host>
      <port>8080</port>
    </proxy>
  </proxies>
</settings>
```

## Build Steps

1. `yarn`
2. `yarn codegen`
3. `yarn build`

## Code Generator

`src/models/` and `src/apis/` are generated from the OpenAPI spec of Kubernetes API as follows:

```sh
$ yarn codegen
```

This command executes `scripts/codegen` which does:

1. Executes [scripts/preprocess_spec.py](scripts/preprocess_spec.py) which was ported from [kubernetes-client/gen](https://github.com/kubernetes-client/gen/tree/master/openapi) and modified to support HTTP proxy
    * Downloads `swagger.json` (Kubernetes API spec)
    * Modifies `swagger.json`: Shortens prefixes, removes deprecated models/APIs, etc.
2. Executes [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) with the config [cross-kube.xml](cross-kube.xml)
    * Uses [typescript-fetch](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/typescript-fetch.md) generator with replacing :
      * Template engine: Mustache -> Handlebars
      * Template files: `templates/`
3. Creates `models/index.ts` and `apis/index.ts`
4. Copies generated files into `src/{models,apis}`
5. Applies [prettier](https://prettier.io/) to those files

The code templates only work with Kubernetes API. They do not work with other APIs.

The code templates are based on OpenAPI Generator's official `typescript-fetch`. The main differences are:

1. Defines modeles as subclasses of `KubeObject`
2. Defines an additional `watch...()` function from a list API, which receives a callback function to handle events
3. Removes `watch` option from list and delete APIs.

## JavaScript Bundle

TypeScript source files in `src/` are transpiled into JavaScript files in `lib/` by:

```sh
$ yarn build
```

`yarn build` runs [Rollup.js](https://rollupjs.org/) internally. See [rollup.config.ts](rollup.config.ts).

### Importing

cross-kube should be imported in the exact way from both browsers and Node.js, but the actual files must be different because a JS file for browsers should not import a library for Node.js, and vice versa. `package.json`'s `main` and `browser` handle that.

Here is an extracted part of `package.json`:

```json
{
  "main": "./lib/index.js",
  "browser": {
    "./lib/runtime.js": "./lib/browser/runtime.js"
  }
}
```

When you import `lib/runtime.js` from a browser, `lib/browser/runtime.js` will be imported instead of `lib/runtime.js`.

* `lib/runtime.js` -> for Node.js
* `lib/browser/runtime.js` -> for browsers

These two files are transpiled from the same file `src/runtime.ts`. You can write environment-specific code in conditional blocks referring `process.browser`. Rollup.js replaces `process.browser` with `true` or `false` and drops the unnecessary false blocks.

Suppose you have this `src/runtime.ts`:

```ts
let modules: Modules = {
  fetch: process.browser ? undefined : require('node-fetch')
}
```

It will be transpiled into the following two files:

`lib/runtime.js` (for Node.js):

```js
let modules = {
  fetch: require('node-fetch')
}
```

`lib/browser/runtime.js` (for browsers):

```js
let modules = {
  fetch: undefined
}
```

### Type Definitions

All type definitions are imported from the root file `lib/index.all.d.ts`.

Here is an extracted part of `package.json`:

```json
{
  "types": "./lib/index.all.d.ts"
}
```

`src/index.all.ts` is only required to generate this `index.all.d.ts`.
