"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    create: function create(id, username, fullname, token) {
        return new _promise2.default(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    "idUser": id,
                    "username": username,
                    "fullname": fullname,
                    "token": token
                });
            }, 100);
        });
    }
};
//# sourceMappingURL=authenuser.js.map