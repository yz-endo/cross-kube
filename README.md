# cross-kube

JavaScript/TypeScript client library for Kubernetes which works with both browsers and Node.js.

This library is especially useful if your web server and Kubernetes API server are integrated with [OIDC](https://openid.net/connect/) single sign-on.

cross-kube uses WHATWG [Fetch](https://fetch.spec.whatwg.org/) and [Streams](https://streams.spec.whatwg.org/) to communicate with Kubernetes API. You need polyfills to support legacy browsers (see the later section this doc).

The following libraries are used internally:

* in browsers:
  * [fetch-readablestream](https://github.com/jonnyreeves/fetch-readablestream): A compatibility layer of [WHATWG Streams](https://streams.spec.whatwg.org/) 
* in Node.js:
  * [node-fetch](https://www.npmjs.com/package/node-fetch): `fetch()` for Node.js

## Note

**cross-kube is still in alpha stage and has not been published yet.**

## Usage

### Importing Models/APIs

cross-kube provides only ES modules which will normally be processed by bundlers (Webpack, Rollup.js, etc.) or TypeScript compiler (tsc). If you would like to import cross-kube directly from browsers or Node.js, edit [rollup.config.ts](rollup.config.ts) to generate a UMD or CJS bundle by executing `yarn build` manually.

It is recommended to import individual modules under `src/models/` and `src/apis/` to avoid increasing the JavaScript bundle size.

Examples:

```ts
import V1Pod from 'cross-kube/lib/models/V1Pod' // Recommended

import CoreV1Api from 'cross-kube/lib/apis/CoreV1Api' // Recommended

import V1Pod from 'cross-kube/lib/models' // Not recommended

import CoreV1Api from 'cross-kube/lib/apis' // Not recommended
```

## Installation

Install cross-kube from the Git repo:

```sh
$ npm install git://github.com/aapf/cross-kube.git
```

(After cross-kube is published, it will be `npm install cross-kube`.)

You also need the following libraries:

* [fetch-readablestream](https://www.npmjs.com/package/fetch-readablestream) for browser environment
* [node-fetch](https://www.npmjs.com/package/node-fetch) for Node.js environment

## Example Code in TypeScript

### List all pods

```ts
import CoreV1Api from 'cross-kube/lib/apis/CoreV1Api'

const api = new CoreV1Api('http://localhost:4000')
api.listNamespacedPod({ namespace: 'default' }).then(podList => {
  console.log(podList)
})
```

### Watch all pods

Watch methods receives HTTP 1.1 chunks from Kubernetes API and invoke a callback function for each event.

```ts
import CoreV1Api from 'cross-kube/lib/apis/CoreV1Api'
// import AbortController from 'abort-controller' // Node.js requires this

const api = new CoreV1Api('http://localhost:4000')
const ac = new AbortController()

// Receive events until receiving an abort signal or server-side timeout
api.watchNamespacedPod({ namespace: 'default', signal: ac.signal }, event => {
  console.log(event)
}).then(() => ({}))

// Abort after 10 seconds
setTimeout(() => {
  ac.abort()
}, 10000)
```

### Create a namespace

```ts
import V1Namespace from 'cross-kube/lib/models/V1Namespace'
import CoreV1Api from 'cross-kube/lib/apis/CoreV1Api'

const api = new CoreV1Api('http://localhost:4000')
const namespace: V1Namespace = {
  metadata: {
    name: 'test'
  }
}
api.createNamespace({ body: namespace }).then((res => {
  console.log('Created namespace', res)
})
```

## Polyfills

Browsers must have [TextEncoder](https://caniuse.com/#search=textencoder) and [ReadableStream](https://caniuse.com/#search=streams) to use this library. You need polyfills to support legacy browsers.

Here is an example code injecting [fast-text-encoding](https://www.npmjs.com/package/fast-text-encoding) and [web-streams-polyfill](https://www.npmjs.com/package/web-streams-polyfill) using [loadjs](https://www.npmjs.com/package/loadjs).

```js
import loadjs from 'loadjs'

async injectPolyfills() => {
  if (!('TextEncoder' in window)) {
    console.log('Loading fast-text-encoding')
    await loadjs('fast-text-encoding.js', {
      returnPromise: true
    })
  }
  if (!('ReadableStream' in window)) {
    console.log('Loading web-streams-polyfill')
    await loadjs('web-streams-polyfill.js', {
      returnPromise: true
    })
  }
}

// call the above function from your code
```

## Using YAML Templates

[yaml-nunjucks-loader](https://github.com/aapf/yaml-nunjucks-loader) makes available to import YAML template files into a JavaScript file.

Here is an example.

`pod.yaml`:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: {{ name }}
spec:
  containers:
    - name: ubuntu
      image: ubuntu:trusty
      imagePullPolicy: IfNotPresent
      command: ['sleep']
      args: ['{{ sleep }}']
```

TypeScript code:

```ts
import V1Pod from 'cross-kube/lib/models/V1Pod'
import CoreV1Api from 'cross-kube/lib/apis/CoreV1Api'
import podTemplate from './pod.yaml'

const api = CoreV1Api('http://localhost:4000')
const pod = podTemplate({ name: 'example', sleep: 600 }) as V1Pod
api.createNamespacedPod({ namespace: 'default', body: pod }).then(() => { console.log('done') })
```

## Limitations

Currently cross-kube does not support authentication and loading Kubernetes configuration.

To use cross-kube in front-end, you need a Kubernetes API server which accepts HTTP requests without exchanging authentication data. Launching a proxy (`kubectl proxy -p 4000`) is the easiest way to test cross-kube for now.

This problem will be solved in the future.
