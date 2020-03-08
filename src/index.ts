import express from 'express';
// tslint:disable-next-line:no-var-requires
let app = require('./server').default;

let currentApp = app;

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = require('./server').default;
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, (err: Error) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on part ${port}`);
  });
