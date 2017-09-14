'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HourActionCards = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HourActionCardsSchema = _mongoose2.default.Schema({
    dateString: String,
    timeHour: Number,
    countBack: Number,
    countInpr: Number,
    countComp: Number,
    idDashboard: String
});

var HourActionCards = exports.HourActionCards = _mongoose2.default.model('HourActionCards', HourActionCardsSchema);
//# sourceMappingURL=hourActionCards.js.map