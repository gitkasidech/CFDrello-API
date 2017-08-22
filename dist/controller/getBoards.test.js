'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _members = require('members');

var _members2 = _interopRequireDefault(_members);

var _boards = require('boards');

var _boards2 = _interopRequireDefault(_boards);

var _getBoards = require('./getBoards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../models', function () {});


var mockMembers = new _members2.default();
var mockBoards = new _boards2.default();

var lists = {
    id: "123x",
    name: "xxx",
    idBoard: "456y"
};
//# sourceMappingURL=getBoards.test.js.map