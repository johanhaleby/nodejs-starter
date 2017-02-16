'use strict';

var express = require('express');
var router = express.Router();

var fakeGames = [
	{
		name: "Very important",
		player1: "Johan",
		player2: "CJ",
		completed: true,
		winner: "Johan"
	},
	{
		name: "Another game",
		player1: "Anders",
		player2: "Pehr",
		completed: false
	},
	{
		name: "Tight",
		player1: "Johan",
		player2: "Pehr",
		completed: true,
		winner: "draw"
	},
	{
		name: "New Game",
		player1: "Anders"		
	}

];

// API
router.get('/games', function (req, res) {
    res.json(fakeGames);
});

module.exports = router;