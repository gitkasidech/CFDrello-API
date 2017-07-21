'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthenUser = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost:27017/AuthenUser', function (err) {
    if (err) {
        console.log(err);
    }
});

var AuthenUserSchema = _mongoose2.default.Schema({
    idUser: String,
    username: String,
    fullname: String,
    token: String,
    email: String
});

var AuthenUser = exports.AuthenUser = _mongoose2.default.model('AuthenUser', AuthenUserSchema);
//# sourceMappingURL=authenuser.js.map