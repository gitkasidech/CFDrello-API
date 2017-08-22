'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lists = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListsSchema = _mongoose2.default.Schema({
    id: String,
    name: String,
    idBoard: String
});

var Lists = exports.Lists = _mongoose2.default.model('Lists', ListsSchema);
//# sourceMappingURL=lists.js.map