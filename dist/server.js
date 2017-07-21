'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var route = require('./controller/authenuser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

route.setRoute(app);

app.set('port', process.env.PORT || 7777);

app.listen(app.get('port'), function () {
    console.log('-----------------------------------------------------\r\n');
    console.log('Server Start, listening on port: ' + app.get('port') + '\r\n');
    console.log('-----------------------------------------------------');
});
//# sourceMappingURL=server.js.map