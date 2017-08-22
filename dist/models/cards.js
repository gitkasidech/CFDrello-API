'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cards = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardsSchema = _mongoose2.default.Schema({
    id: String,
    name: String,
    dateLastActivity: Date,
    idBoard: String,
    idList: String,
    idMembers: Array,
    idLabels: Array
});

var Cards = exports.Cards = _mongoose2.default.model('Cards', CardsSchema);
//# sourceMappingURL=cards.js.map