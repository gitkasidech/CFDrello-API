'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var routeM = require('./controller/members');
var routeB = require('./controller/boards');
var routeL = require('./controller/lists');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        res.header('Access-Control-Allow-Credentials', true);
                        res.header('Access-Control-Allow-Origin', '*');
                        res.header('Access-Control-Allow-Methods', 'GET,POST');
                        res.header('Access-Control-Allow-Headers', 'appid, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
                        if ('OPTIONS' == req.method) {
                            res.send(200); //200 is OK
                        } else {
                            next();
                        }

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}());

routeM.setRoute(app); //go to route 
routeB.setRoute(app);
routeL.setRoute(app);

app.set('port', process.env.PORT || 7777); //set port is 7777

app.listen(app.get('port'), (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    console.log('-----------------------------------------------------\r\n');
                    console.log('Server Start, listening on port: ' + app.get('port') + '\r\n');
                    console.log('-----------------------------------------------------');

                case 3:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
})));
//# sourceMappingURL=server.js.map