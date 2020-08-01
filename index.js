/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const URLs = require('./URLs.js');

const app = express();
const port = 3000;

console.log(URLs);
app.listen(port, () => console.log(`Steam proxy. Not listening at http://localhost:${port}`));

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('/app/:gameId', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

/* Need more testing to see which is faster
URLs.forEach( (mapping) => {
  app.get(`${mapping.match}*`, (req, res) => {
    res.redirect(`${req.protocol}://${mapping.server}${req.originalUrl}`);
  });
});
*/

URLs.forEach((mapping) => {
  app.get(`${mapping.match}*`, (req, res) => {
    fetch(`${req.protocol}://${mapping.server}${req.originalUrl}`)
      .then((response) => response.json())
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).json({ error: 'Error fetching game description' });
      });
  });
});
