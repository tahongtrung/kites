'use strict'
const engine = require('@kites/engine');

/**
 * minimalist kites application
 */
engine({
        loadConfig: true,
        discover: true
    })
    .init()
    .then(function (kites) {
        kites.logger.info('Kites express: Hello world!');
    })
    .catch(function (e) {
        console.error(e.stack);
        process.exit(1);
    })