'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Actions = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionsSchema = _mongoose2.default.Schema({
    id: String,
    idMemberCreator: String,
    data: Object,
    type: String,
    date: Date,
    dateString: String
});

var Actions = exports.Actions = _mongoose2.default.model('Actions', ActionsSchema);
//# sourceMappingURL=actions.js.map