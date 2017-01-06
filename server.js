const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const open = require('open');

// Serve static assets normally.
app.use(express.static(__dirname + '/build'));

// Handle every other route with index.html.
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

app.listen(port);
console.log(`Server started on http://localhost:${port}/`);
open(`http://localhost:${port}/`);