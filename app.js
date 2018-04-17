'use strict'
const engine = require('@kites/engine');

engine({
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