'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewUser = exports.checkreq = exports.havedata = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _members = require('../models/members');

var _boards = require('./boards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var havedata = exports.havedata = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(sendData) {
        var inf, callcheckreq, user, callcreate, callBoards;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        inf = sendData;

                        console.log(inf);
                        _context.next = 4;
                        return checkreq(inf);

                    case 4:
                        callcheckreq = _context.sent;

                        console.log(callcheckreq);

                        if (!callcheckreq) {
                            _context.next = 8;
                            break;
                        }

                        return _context.abrupt('return', res.status(500).send("format should be"));

                    case 8:
                        _context.next = 10;
                        return _members.Members.findOne({ id: inf.id });

                    case 10:
                        user = _context.sent;

                        console.log(user);

                        _context.next = 14;
                        return createnewUser(user, inf);

                    case 14:
                        callcreate = _context.sent;

                        if (callcreate) {
                            console.log("create new user complete");
                        } else {
                            console.log("have a user already!!");
                        }
                        _context.next = 18;
                        return (0, _boards.checkCreateBoard)(inf);

                    case 18:
                        callBoards = _context.sent;

                    case 19:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function havedata(_x) {
        return _ref.apply(this, arguments);
    };
}(); //as rename
var checkreq = exports.checkreq = function checkreq(inf) {
    if (!inf.token || !inf.id || !inf.username || !inf.app_id || !inf.idBoards) {
        return true;
    } else {
        return false;
    }
};

var createnewUser = exports.createnewUser = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(user, body) {
        var newuser;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (user) {
                            _context2.next = 7;
                            break;
                        }

                        _context2.next = 3;
                        return _members.Members.create({
                            id: body.id,
                            username: body.username,
                            fullName: body.fullName,
                            token: body.token,
                            idBoards: body.idBoards
                        });

                    case 3:
                        newuser = _context2.sent;
                        return _context2.abrupt('return', true);

                    case 7:
                        return _context2.abrupt('return', false);

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function createnewUser(_x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=members.js.map