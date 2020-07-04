/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Steam proxy. listening at http://localhost:${port}`));
app.use(express.static('./client/dist'));
