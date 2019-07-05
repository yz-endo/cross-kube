  // tslint:disable-next-line
import CoreV1Api from 'cross-kube/lib/apis/CoreV1Api';
  // tslint:disable-next-line
import V1PodList from 'cross-kube/lib/models/V1PodList';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const app = express();

app.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line
  const proxy = require('http-proxy-middleware');
  app.use(
    '/api',
    proxy({
      autoRewrite: true,
      changeOrigin: true,
      onError: console.error,
      proxyTimeout: 0,
      secure: false,
      target: process.env.KUBE_API_URL || 'http://localhost:4000',
      timeout: 0
    })
  );
}

app.use(express.static(process.env.RAZZLE_PUBLIC_DIR!));

function loadPods(): Promise<V1PodList> {
  const api = new CoreV1Api('http://localhost:3000');
  return api.listPodForAllNamespaces({});
}

app.get('/*', async (req: express.Request, res: express.Response) => {
  const data = req.query.ssr === 'no' ? undefined : await loadPods();
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.send(
    `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Razzle TypeScript</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
          ${
            process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
        <script>window.__SSR_DATA__ = ${data ? JSON.stringify(data) : undefined};</script>
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
  );
});

export default app;
