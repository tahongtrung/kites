'use strict'
const path = require('path');
const kites = require('@kites/engine');

/**
 * minimalist kites application
 */
kites({
        loadConfig: true,
        discover: true
    })
    .init()
    .then(function (kites) {
        var app = kites.express.app;
        // always serve index.html
        app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, `./docs/index.html`)));
    })
    .catch(function (e) {
        console.error(e.stack);
        process.exit(1);
    })