const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const route = require('./controller/authenuser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

route.setRoute(app);

app.set('port', process.env.PORT || 7777);

app.listen(app.get('port'), function(){
    console.log('-----------------------------------------------------\r\n');
    console.log('Server Start, listening on port: '+ app.get('port') + '\r\n');
    console.log('-----------------------------------------------------');
});