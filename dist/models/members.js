'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Members = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dbCFDrello = require('./dbCFDrello');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MembersSchema = _mongoose2.default.Schema({
    id: String,
    username: String,
    fullName: String,
    token: String,
    idBoards: Array
});

var Members = exports.Members = _mongoose2.default.model('Members', MembersSchema);
//# sourceMappingURL=members.js.map