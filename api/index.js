const express = require('express');

const config = require('../config');

const app = express();

app.get('/', (req, res) => {
  res.json({
    hola: 'mundo',
  });
});

app.listen(config.api.port, () => {
  console.log('Server running on http://localhost:3000');
});
