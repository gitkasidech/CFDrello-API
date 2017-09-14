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
                        _context.next = 3;
                        return checkreq(inf);

                    case 3:
                        callcheckreq = _context.sent;

                        if (!callcheckreq) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', res.status(500).send("format should be"));

                    case 6:
                        _context.next = 8;
                        return _members.Members.findOne({ id: inf.id });

                    case 8:
                        user = _context.sent;
                        _context.next = 11;
                        return createnewUser(_members.Members, user, inf);

                    case 11:
                        callcreate = _context.sent;
                        _context.next = 14;
                        return (0, _boards.checkCreateBoard)(inf);

                    case 14:
                        callBoards = _context.sent;

                    case 15:
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
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(Members, user, body) {
        var newuser, _newuser;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (user) {
                            _context2.next = 7;
                            break;
                        }

                        _context2.next = 3;
                        return Members.create({
                            id: body.id,
                            username: body.username,
                            fullName: body.fullName,
                            token: body.token,
                            idBoards: body.idBoards
                        });

                    case 3:
                        newuser = _context2.sent;
                        return _context2.abrupt('return', newuser);

                    case 7:
                        if (!(user.username != body.username || user.fullName != body.fullName || user.idBoards.toString() != body.idBoards.toString())) {
                            _context2.next = 14;
                            break;
                        }

                        _context2.next = 10;
                        return Members.update({ id: body.id }, { $set: {
                                username: body.username,
                                fullName: body.fullName,
                                idBoards: body.idBoards
                            } });

                    case 10:
                        _newuser = _context2.sent;
                        return _context2.abrupt('return', _newuser);

                    case 14:
                        return _context2.abrupt('return', false);

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function createnewUser(_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=members.js.map