'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _authenuser = require('./authenuser');

var _authens = require('authens');

var _authens2 = _interopRequireDefault(_authens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('checkreq have token,idUser,username', function () {
    expect((0, _authenuser.checkreq)({
        "id": "1",
        "username": "xxxxx",
        "token": "12345678"
    })) === false;
});

test('checkreq have token', function () {
    expect((0, _authenuser.checkreq)({
        "token": "12345678"
    })).toBe(true);
});

test('checkreq have idUser', function () {
    expect((0, _authenuser.checkreq)({
        "id": "1"
    })).toBe(true);
});

test('checkreq have username', function () {
    expect((0, _authenuser.checkreq)({
        "username": "xxxxx"
    })).toBe(true);
});

test('checkreq have token,idUser', function () {
    expect((0, _authenuser.checkreq)({
        "id": "1",
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
        "id": "1",
        "username": "xxxxx"
    })).toBe(true);
});

test('checkreq don\'t have idUser,username', function () {
    expect((0, _authenuser.checkreq)({})).toBe(true);
});

test('old user', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var user, givenUser, rec;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    user = {
                        id: "001",
                        username: "xxx",
                        fullname: "yyy",
                        token: "zzz"
                    };
                    givenUser = {
                        id: "001",
                        username: "xxx",
                        fullname: "yyy",
                        token: "zzz"
                    };
                    _context.next = 4;
                    return (0, _authenuser.createnewUser)(user, givenUser);

                case 4:
                    rec = _context.sent;

                    expect(rec).toBe(false);

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
})));

// test('new user', async () => {
//     const user = null
//     const givenUser = {
//         id: "001",
//         username: "xxx",
//         fullname: "yyy",
//         token: "zzz"
//     }
//     const rec = await newUser(givenUser)
//     expect(rec).toBe(true)
// });
//# sourceMappingURL=authenuser.test.js.map