const express = require('express');

const config = require('../config');
const data = require('../store/dummy');

const app = express();

app.get('/', (req, res) => {
  res.json({
    data,
  });
});

app.listen(config.api.port, () => {
  console.log(`Server running on http://localhost:${config.api.port}`);
});
