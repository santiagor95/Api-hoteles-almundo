const path = require('path');

module.exports = {
    openapi: '3.0.0',
    info: {
        // API informations (required)
        title: 'Node-Typescript API', // Title (required)
        version: '1.0.0', // Version (required)
        description: 'API Rest para aplicacion de hoteles', // Description (optional)
    },
    servers: [
        { url: 'http://localhost:4000' }
    ],
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};
