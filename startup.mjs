import { series } from 'async';

const { exec } = require('child_process');

const prodBase = 'steam'
const devBase = 'rpt21/fec-bell'

let base = prodBase;
base = devBase; // comment this out on prod

series([
  exec(`cd ~/${base}/steam-user-tags`),
  exec('npm run build'),
  exec('npm start'),
  exec(`cd ~/${base}/steam-reviews-graph`),
  exec('npm run build'),
  exec('npm start'),
  exec(`cd ~/${base}/damien-proxy`),
  exec('npm run build'),
  exec('npm start'),
]);
