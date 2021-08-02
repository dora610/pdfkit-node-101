const express = require('express');
const app = express();
const router = require('./routes/index');

app.use(express.json());
app.use(router);

app.listen(8000, () => console.log('server is up and running at 8000'));