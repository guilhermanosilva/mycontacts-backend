const express = require('express');
const routes = require('./app/routes');

const app = express();
app.use(routes);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
