'use strict';

var _authenuser = require('./authenuser');

var _authenuser2 = _interopRequireDefault(_authenuser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('create new user', function () {
    expect(creatnewUser({
        "idUser": "1",
        "username": "xxxxx",
        "fullname": "xxxx xxxxx",
        "token": "12345678",
        "email": " "
    })).toBe(true);
});
//# sourceMappingURL=authenuser.test.js.map