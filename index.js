/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const URLs = require('./URLs.js');

const app = express();
const port = 3000;

console.log(URLs);
app.listen(port, () => console.log(`Steam proxy. Not listening at http://localhost:${port}`));

app.use(express.static('./client/dist'));

app.get('/app/:gameId', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

URLs.forEach( (mapping) => {
  app.get(`${mapping.match}*`, (req, res) => {
    res.redirect(`${req.protocol}://${mapping.server}${req.originalUrl}`);
  });
});
