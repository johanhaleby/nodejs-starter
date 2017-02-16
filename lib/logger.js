'use strict';
var winston = require('winston');

/**
 * Creates a custom winston logging instance that includes timestamp
 * when logging
 */
var logger = new (winston.Logger)({
    transports: [new (winston.transports.Console)({'timestamp': true})]
});

module.exports = logger;
