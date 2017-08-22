'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Labels = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelsSchema = _mongoose2.default.Schema({
    id: String,
    name: String,
    color: String,
    uses: Number,
    idBoard: String
});

var Labels = exports.Labels = _mongoose2.default.model('Labels', LabelsSchema);
//# sourceMappingURL=labels.js.map