const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger');

// Add these lines after other middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
