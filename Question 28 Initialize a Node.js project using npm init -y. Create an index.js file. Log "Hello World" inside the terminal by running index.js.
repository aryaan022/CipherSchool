// index.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
