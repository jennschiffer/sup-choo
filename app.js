// web server
const express = require('express');
const app = express();

// config etc
const config = require('./config');
const path = require('path');

// public files
app.use('/static', express.static(__dirname + '/build'));

app.get('/', (req, res) => {
  res.send(`
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>sup choo</title>
      </head>
      <body>
        <!-- welcome to what jenn does on a friday waiting to party -->
        <script src="/static/supchoo.js"></script>
      </body>
    </html>
  `);
});

// Start the web server.
app.listen(config.app.port, config.app.host);
console.log(`Server running on ${config.app.host}:${config.app.port}.`);
