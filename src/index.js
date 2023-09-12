require('express-async-errors');

const express = require('express');
const routes = require('./app/routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();
const PORT = 3001

app.use(express.json());
app.use(cors)
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log('🔥 Server started at http://localhost:' + PORT));
