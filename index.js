const express = require('express');
// const renderApp = require('./src/renderApp');

const app = express();

const port = 3001;

// app.use('/static', express.static(__dirname + '/build'))

app.use('/images', express.static('images'));

app.get('*', (_, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
