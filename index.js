'use strict';

const koa = require('koa');
const settings = require('./api/conf/api.settings');

let http = require('http');
let app = koa();

// Bootstrapping
require('./api/conf/api.bootstrap')(app);
// Routes
require('./api/conf/api.routes')(app);

app.context.cache = settings.cache;

let server = http.createServer(app.callback());

function startServer() {

  server.listen(settings.port, function() {

    console.log('Beach-Locator Started on port:', settings.port);

  });
  
}

if (require.main === module) {
  
  startServer();
  
} else {
  
  module.exports = startServer();
  
}