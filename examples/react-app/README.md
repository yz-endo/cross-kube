# React Example App

This project is built upon [Razzle TypeScript Example](https://github.com/jaredpalmer/razzle/tree/master/examples/with-typescript).

The initial code was generated by:

```sh
$ create-razzle-app --example with-typescript react-app
```

## Usage

Install required packages:

```sh
$ yarn install
```

Launch Kubernetes API proxy with port 4000:

```sh
$ kubectl proxy -p 4000
```

Start the dev-server:

```sh
$ yarn start
```

The dev-server proxies HTTP request `/api/*` to `localhost:4000` (Kubernetes API proxy which does
not require authentication).

Open the URL with your browser: `http://localhost:3000`

The home page renders all Pods. By default they are rendered by server-side (server-side rendering; SSR). You can check the client-side rendering and API requests by opening `http://localhost:3000/?ssr=no`. See the implementation: `src/server.tsx`.

## Razzle Doc

### Idea behind the example
This is an of how to use Razzle with [TypeScript](https://github.com/Microsoft/TypeScript). 
In `razzle.config.js`, we locate the part of the webpack configuration 
that is running `babel-loader` and swap it out for `ts-loader`. 
Additionally, we make sure Razzle knows how to resolve `.ts` and `.tsx` files.

Lastly, we also need to modify our Jest configuration to handle typescript files. 
Thus we add `ts-jest` and `@types/jest` to our dev dependencies. Then we augment Razzle's default jest setup by adding a field in our `package.json`.

```json
// package.json

{
  ...
  "jest": {
    "transform": {
      "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
      "\\.css$": "<rootDir>/node_modules/razzle/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/node_modules/razzle/config/jest/fileTransform.js"
    },
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.(ts|js)?(x)",
      "<rootDir>/src/**/?(*.)(spec|test).(ts|js)?(x)"
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "json"
    ],
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}"
    ]
  }
}
```

The `tslint.json` and `tsconfig.json` are taken from Microsoft's official 
[TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter).

Note: You do not techincally _need_ to fully replace `babel-loader` with 
`ts-loader` to use TypeScript. Both TS and Babel transpile ES6 code,
so when you run both webpack loaders you are making Razzle do twice the work. From our testing,
this can make HMR extremely slow on larger apps. Thus, this example overwrites
`babel-loader` with `ts-loader`. However, if you are incrementally moving to typescript you may want to run both loaders side by side. If you are running both, add this to your `jest.transform` setup in `package.json`:

```
"^.+\\.(js|jsx)$": "<rootDir>/node_modules/razzle/config/jest/babelTransform.js",
```
This will continue to transform .js files through babel.
