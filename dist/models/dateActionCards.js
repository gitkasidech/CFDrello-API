'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateActionCards = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateActionCardsSchema = _mongoose2.default.Schema({
    date: Date,
    dateString: String,
    countBack: Number,
    countInpr: Number,
    countComp: Number,
    idDashboard: String
});

var DateActionCards = exports.DateActionCards = _mongoose2.default.model('DateActionCards', DateActionCardsSchema);
//# sourceMappingURL=dateActionCards.js.map