NodeJS Starter
==============

Start project for nodejs lab. Uses [winston](https://github.com/winstonjs/winston) for logging, [Express](http://expressjs.com/) for HTTP API, [node-config](https://github.com/lorenwest/node-config) for configuration.


### Development

To get started run:

1. npm install
1. npm run-script watch (starts server and allows you press F5 in the browser to see changes instantly)

Now navigate to [http://localhost:3000](http://localhost:3000)

### Testing

Tests are using [MochaJS](https://mochajs.org), [Chai](http://chaijs.com/), [Supertest](https://github.com/visionmedia/supertest) and [Nock](https://github.com/node-nock/nock) for stubbing out HTTP services.

1. Run tests using `npm test` or `npm run-script test-watch` for continuous testing

