'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setRoute = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _authenuser = require('../models/authenuser');

var _authenuser2 = _interopRequireDefault(_authenuser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthenUser = require('mongoose').model('AuthenUser');

var setRoute = exports.setRoute = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(app) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        app.post('/authenuser', function () {
                            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
                                var users, user, newuser;
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                if (!(!req.body.token || !req.body.idUser || !req.body.username)) {
                                                    _context.next = 4;
                                                    break;
                                                }

                                                res.status(500).send("format should be");
                                                _context.next = 18;
                                                break;

                                            case 4:
                                                users = new AuthenUser(req.body);
                                                _context.next = 7;
                                                return AuthenUser.findOne({ idUser: req.body.idUser });

                                            case 7:
                                                user = _context.sent;

                                                if (user) {
                                                    _context.next = 16;
                                                    break;
                                                }

                                                _context.next = 11;
                                                return AuthenUser.create({
                                                    idUser: req.body.idUser,
                                                    username: req.body.username,
                                                    fullname: req.body.fullname,
                                                    token: req.body.token,
                                                    email: req.body.email
                                                });

                                            case 11:
                                                newuser = _context.sent;

                                                //res.json(users);
                                                console.log("add complete");
                                                res.send('<h1>add New dashboard</h1>');
                                                _context.next = 18;
                                                break;

                                            case 16:
                                                console.log("have a user already!!");
                                                res.send('<h1>dashboard</h1>');

                                            case 18:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined);
                            }));

                            return function (_x2, _x3, _x4) {
                                return _ref2.apply(this, arguments);
                            };
                        }());

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function setRoute(_x) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=authenuser.js.map