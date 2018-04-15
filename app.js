'use strict'
const path = require('path');
const express = require('express');
const kites = require('@kites/engine');

/**
 * minimalist kites application
 */
kites({
        loadConfig: true,
        discover: false
    })
    .use(require('./extensions/sum'))
    .use(require('@kites/express')({
        static: path.join(__dirname, './docs')
    }))
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