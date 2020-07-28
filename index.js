/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Steam proxy. Not listening at http://localhost:${port}`));
app.use(express.static('./client/dist'));

app.get('/app/:gameId', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.get('/api/dlc/:gameId', (req, res) => {
  console.log(req.params.gameId);
  res.sendFile();
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