    'use strict';

var log = require('./lib/logger.js');
var express = require('express');
var app = express();
var path = require('path');
var api = require('./http/api.js');
var config = require('config');

function shutdown() {
    log.info('About to exit.');
}

process.on('SIGTERM', shutdown);
process.on('exit', shutdown);
process.on('uncaughtException', shutdown);

// Static resources
app.use('/resources', express.static(__dirname + '/resources'));

// API
app.use('/api', api);

// HTML
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


var server = app.listen(3000, function () {
    log.info('%s server is listening on port 3000! (env %s)', config.get("server.name"), process.env.NODE_ENV == undefined ? "default" : process.env.NODE_ENV)
});

module.exports = app;