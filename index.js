/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const URLs = require('./URLs.js');

const app = express();
const port = 3000;

console.log(URLs);
// http://localhost:3002/api/reviews/recent/detail/57
// http://localhost:3006/api/tags/57

app.listen(port, () => console.log(`Steam proxy. Not listening at http://localhost:${port}`));

app.use(express.static('./client/dist'));

app.get('/app/:gameId', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

let serverpath = 'ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3001';
app.get('/api/gamereviews/*', (req, res) => {
  res.redirect(`${req.protocol}://${serverpath}${req.originalUrl}`);
});

serverpath = 'ec2-44-233-13-178.us-west-2.compute.amazonaws.com:3002';
app.get('/api/reviewcount/*', (req, res) => {
  res.redirect(`${req.protocol}://${serverpath}${req.originalUrl}`);
});

serverpath = 'ec2-13-56-224-137.us-west-1.compute.amazonaws.com:3003';
app.get('/api/dlc/*', (req, res) => {
  res.redirect(`${req.protocol}://${serverpath}${req.originalUrl}`);
});

serverpath = 'ec2-18-188-192-44.us-east-2.compute.amazonaws.com:3004';
app.get('/api/media/*', (req, res) => {
  res.redirect(`${req.protocol}://${serverpath}${req.originalUrl}`);
});

serverpath = 'ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3005';
app.get('/api/description/*', (req, res) => {
  res.redirect(`${req.protocol}://${serverpath}${req.originalUrl}`);
});

serverpath = '44.233.13.178:3006';
app.get('/api/tags/*', (req, res) => {
  res.redirect(`${req.protocol}://${serverpath}${req.originalUrl}`);
});

// Redirect API calls

// const dlc = express.Router();
// app.use('/api/dlc', dlc);
// dlc.get('/:gameid', (req, res) => {
//   let { gameid } = req.params;
//   fetch(`http://localhost:3003/api/dlc/${gameid}`)
//     .then(response => response.json())
//     .then(results => {
//       res.status(200).json(results);
//     })
//     .catch(e => {
//       console.error(e);
//       res.status(500).json({ error: 'Error fetching downloadable content' });
//     });
// });

// const gameName = express.Router();
// app.use('/api/name', gameName);
// gameName.get('/:gameid', (req, res) => {
//   let { gameid } = req.params;
//   fetch(`http://localhost:3003/api/name/${gameid}`)
//     .then(response => response.json())
//     .then(results => {
//       res.status(200).json(results);
//     })
//     .catch(e => {
//       console.error(e);
//       res.status(500).json({ error: 'Error fetching game name' });
//     });
// });