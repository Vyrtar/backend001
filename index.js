const requiredNodeVersion = '18';

if (!process.version.startsWith(`v${requiredNodeVersion}`)) {
  console.error(`This project requires Node.js v${requiredNodeVersion}. You are using ${process.version}.`);
  process.exit(1);
}

const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.json({ message: 'Backend A: Node.js 18' });
});

app.listen(3001, () => {
  console.log('Backend A running on port 3001');
});
