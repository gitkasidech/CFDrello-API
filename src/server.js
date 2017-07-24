const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const route = require('./controller/authenuser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'appid, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
});

route.setRoute(app);

app.set('port', process.env.PORT || 7777);

app.listen(app.get('port'), function () {
    console.log('-----------------------------------------------------\r\n');
    console.log('Server Start, listening on port: ' + app.get('port') + '\r\n');
    console.log('-----------------------------------------------------');
});