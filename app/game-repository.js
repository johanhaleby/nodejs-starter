'use strict';

var state = [
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
	}];

var repo = {
	findAll: function () {
		return state;
	},
	replaceAll: function(gameList) {
		state = gameList;
	}

};

module.exports = repo;