'use strict';

var gameRepository = require('../app/game-repository.js');
var app = require('../server.js');
var request = require('supertest')(app);

describe('Games API', function () {
    describe('/api/games', function () {
        it("returns a list of all games", function (done) {
            // Given
            var games = [{
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
            }];

            gameRepository.replaceAll(games);

            // When
            request.get('/api/games')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, games, done);
        });
    })
});
