'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _members = require('./members');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('checkreq', function () {
    expect((0, _members.checkreq)({
        "token": "12345678"
    })).toBe(true);
    expect((0, _members.checkreq)({
        "id": "1"
    })).toBe(true);
    expect((0, _members.checkreq)({
        "username": "xxxxx"
    })).toBe(true);
    expect((0, _members.checkreq)({
        "id": "1",
        "token": "12345678"
    })).toBe(true);
    expect((0, _members.checkreq)({
        "username": "xxxxx",
        "token": "12345678"
    })).toBe(true);
    expect((0, _members.checkreq)({
        "id": "1",
        "username": "xxxxx"
    })).toBe(true);
    expect((0, _members.checkreq)({})).toBe(true);
    expect((0, _members.checkreq)({
        "id": "1",
        "username": "xxxxx",
        "token": "12345678"
    })) === false;
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
                    return (0, _members.createnewUser)(user, givenUser);

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
//     const rec = await createnewUser(givenUser)
//     expect(rec).toBe(true)
// });
//# sourceMappingURL=members.test.js.map