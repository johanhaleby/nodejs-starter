'use strict';

var gameRepository = require('../app/game-repository.js');
var express = require('express');
var router = express.Router();

// API
router.get('/games', function (req, res) {
    res.json(gameRepository.findAll());
});

module.exports = router;