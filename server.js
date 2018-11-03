'use strict';

require('dotenv').config({silent: true});
const express = require('express'),
  helmet = require('helmet'),
  path = require('path'),
  bodyParser = require('body-parser'),
  app = express(),
  server = require('http').createServer(app);


/*Loading Middlewares*/
/*helmet used to secure headers*/
app.use(helmet());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

/*bodyParser used to extract incoming request*/
app.use(bodyParser.json());

/*set static*/
app.use(express.static(__dirname + '/dist/AngularQuiz'));

/*rendering file on routes*/
app.get(/^((?!\/(api)).)*$/, function (req, res) {
    res.sendFile(path.resolve('./dist/AngularQuiz/index.html'));
});

/*Listen on Server Port*/
server.listen(process.env.PORT || 5000, function () {
  console.log('listening on', server.address().port);
});