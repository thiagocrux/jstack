const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello, world!');
});

const LOCAL_APP_PORT = 3000;

app.listen(
  LOCAL_APP_PORT,
  // eslint-disable-next-line no-console
  () => console.log(`🔥 Server started at http://localhost:${LOCAL_APP_PORT}`),
);
