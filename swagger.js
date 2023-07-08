const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
        title: 'Node.js API',
        version: '1.0.0',
        description: 'API documentation',
    },
    host: 'localhost:3000',
    basePath: '/',
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
