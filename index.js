const fs = require('fs');
const express = require('express');
const app = express();

const mode = process.env.NODE_ENV || 'development';

console.log("mode", mode, "node env", process.env.NODE_ENV);

const port = 3001;
const baseUrl = `http://localhost:${port}`;

let staticUrl = 'http://localhost:8080/';

if (mode === 'production') {
  app.use('/dist', express.static('dist'));
  staticUrl = `${baseUrl}/dist/`;
}

app.use('/images', express.static('images'));

// app.get('*', (_, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.get('*', (_, res) => {
  fs.readFile(__dirname + '/index.html', 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    res.send(data.replace(/\{ STATIC_URL \}/g, staticUrl));
  });
});




app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
