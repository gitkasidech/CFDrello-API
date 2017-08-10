'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewUser = exports.checkreq = exports.havedata = exports.setRoute = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _authenuser = require('../models/authenuser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//as rename

var setRoute = exports.setRoute = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(app) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        app.post('/authenuser', havedata);

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function setRoute(_x) {
        return _ref.apply(this, arguments);
    };
}();
var havedata = exports.havedata = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
        var callcheckreq, users, user, callcreate;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        // const json = req.body
                        console.log(req.body);
                        _context2.next = 3;
                        return checkreq(req.body);

                    case 3:
                        callcheckreq = _context2.sent;

                        console.log(callcheckreq);

                        if (!callcheckreq) {
                            _context2.next = 7;
                            break;
                        }

                        return _context2.abrupt('return', res.status(500).send("format should be"));

                    case 7:
                        users = new _authenuser.AuthenUsers(req.body);
                        _context2.next = 10;
                        return _authenuser.AuthenUsers.findOne({ idUser: req.body.id });

                    case 10:
                        user = _context2.sent;

                        console.log(user);

                        _context2.next = 14;
                        return createnewUser(user, req.body);

                    case 14:
                        callcreate = _context2.sent;

                        if (callcreate) {
                            console.log("create new user complete");
                            //add to sprint 2 query data
                            res.json({
                                canAccessDashboard: true,
                                fullname: req.body.fullName,
                                token: req.body.token
                            });
                        } else {
                            console.log("have a user already!!");
                            //add to sprint 2 query data
                            res.json({
                                canAccessDashboard: false,
                                fullname: req.body.fullName,
                                token: req.body.token
                            });
                        }

                    case 16:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function havedata(_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
var checkreq = exports.checkreq = function checkreq(body) {
    if (!body.token || !body.id || !body.username) {
        return true;
    } else {
        return false;
    }
};
var createnewUser = exports.createnewUser = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(user, body) {
        var users, newuser;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (user) {
                            _context3.next = 8;
                            break;
                        }

                        users = new _authenuser.AuthenUsers(body);
                        _context3.next = 4;
                        return _authenuser.AuthenUsers.create({
                            idUser: body.id,
                            username: body.username,
                            fullname: body.fullName,
                            token: body.token
                        });

                    case 4:
                        newuser = _context3.sent;
                        return _context3.abrupt('return', true);

                    case 8:
                        return _context3.abrupt('return', false);

                    case 9:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewUser(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=authenuser.js.map