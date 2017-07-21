'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _authenuser = require('./authenuser');

var _authens = require('authens');

var _authens2 = _interopRequireDefault(_authens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthenUsers = new _authens2.default();
jest.mock('../models/authenuser', function () {
    return { AuthenUsers: AuthenUsers };
});

test('checkreq have token,idUser,username', function () {
    expect((0, _authenuser.checkreq)({
        "idUser": "1",
        "username": "xxxxx",
        "token": "12345678"
    })).toBe(false);
});

test('checkreq have token', function () {
    expect((0, _authenuser.checkreq)({
        "token": "12345678"
    })).toBe(true);
});

test('checkreq have idUser', function () {
    expect((0, _authenuser.checkreq)({
        "idUser": "1"
    })).toBe(true);
});

test('checkreq have username', function () {
    expect((0, _authenuser.checkreq)({
        "username": "xxxxx"
    })).toBe(true);
});

test('checkreq have token,idUser', function () {
    expect((0, _authenuser.checkreq)({
        "idUser": "1",
        "token": "12345678"
    })).toBe(true);
});

test('checkreq have token,username', function () {
    expect((0, _authenuser.checkreq)({
        "username": "xxxxx",
        "token": "12345678"
    })).toBe(true);
});

test('checkreq have idUser,username', function () {
    expect((0, _authenuser.checkreq)({
        "idUser": "1",
        "username": "xxxxx"
    })).toBe(true);
});

test('checkreq don\'t have idUser,username', function () {
    expect((0, _authenuser.checkreq)({})).toBe(true);
});

test('create new user', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var givenUser, rec;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    givenUser = {};
                    _context.next = 3;
                    return (0, _authenuser.createnewUser)(givenUser);

                case 3:
                    rec = _context.sent;

                    expect(rec).toBe(true);

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
})));

test('old user', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var givenUser, rec;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    givenUser = {
                        idUser: "1",
                        username: "xxxxx",
                        fullname: "xxxx xxxxx",
                        token: "12345678",
                        email: " "
                    };
                    _context2.next = 3;
                    return (0, _authenuser.createnewUser)(givenUser);

                case 3:
                    rec = _context2.sent;

                    expect(rec).toBe(false);

                case 5:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
})));
//# sourceMappingURL=authenuser.test.js.map