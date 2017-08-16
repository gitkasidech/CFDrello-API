'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Boards = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dbCFDrello = require('./dbCFDrello');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoardsSchema = _mongoose2.default.Schema({
    id: String,
    name: String
});

var Boards = exports.Boards = _mongoose2.default.model('Boards', BoardsSchema);
//# sourceMappingURL=boards.js.map