'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dashboards = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardsSchema = _mongoose2.default.Schema({
    name: String,
    idBoard: String,
    listComp: Array,
    colorComp: String,
    listInpr: Array,
    colorInpr: String,
    listBack: Array,
    colorBack: String,
    idMember: String
});

var Dashboards = exports.Dashboards = _mongoose2.default.model('Dashboards', DashboardsSchema);
//# sourceMappingURL=dashboards.js.map