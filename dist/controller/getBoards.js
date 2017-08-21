'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findBoards = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _boards = require('../models/boards');

var _members = require('../models/members');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findBoards = exports.findBoards = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        var idMember, user, idBoards, len, boards, i, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        idMember = req.params.idMember;
                        _context.next = 3;
                        return _members.Members.findOne({ id: idMember });

                    case 3:
                        user = _context.sent;
                        idBoards = user.idBoards;
                        len = idBoards.length;
                        boards = [];
                        i = 0;

                    case 8:
                        if (!(i < len)) {
                            _context.next = 16;
                            break;
                        }

                        _context.next = 11;
                        return _boards.Boards.findOne({ id: idBoards[i] }, { id: 1, name: 1, _id: 0 });

                    case 11:
                        data = _context.sent;
                        //1show 0don't show
                        boards.push(data);

                    case 13:
                        i++;
                        _context.next = 8;
                        break;

                    case 16:
                        res.json(boards);

                    case 17:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function findBoards(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=getBoards.js.map