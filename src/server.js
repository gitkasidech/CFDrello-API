const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routeM = require('./controller/members');
const routeB = require('./controller/boards');
const routeL = require('./controller/lists');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(async (req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'appid, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);  //200 is OK
    } else {
        next();
    }
});

routeM.setRoute(app); //go to route 
routeB.setRoute(app);
routeL.setRoute(app);

app.set('port', process.env.PORT || 7777); //set port is 7777

app.listen(app.get('port'), async () => {
    console.log('-----------------------------------------------------\r\n');
    console.log('Server Start, listening on port: ' + app.get('port') + '\r\n');
    console.log('-----------------------------------------------------');
});