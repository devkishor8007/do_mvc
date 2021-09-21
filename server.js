const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const errorHandler = require('./middleware/error');

app.use(express.json());
app.use(morgan('dev'));

require('./db');

app.use('/api/v1/data', require('./router/data_router'));
app.use(errorHandler);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening at the ${PORT}`);
});

