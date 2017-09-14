'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findLists = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lists = require('../models/lists');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findLists = exports.findLists = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        var idBoard, lists;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('GET \'/lists/' + req.params.idBoard + '\' \uD83E\uDD20 ' + Date());
                        idBoard = req.params.idBoard;
                        _context.next = 4;
                        return _lists.Lists.find({ idBoard: idBoard }, { id: 1, name: 1, _id: 0 });

                    case 4:
                        lists = _context.sent;
                        //1show 0don't show
                        res.json(lists);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function findLists(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=getLists.js.map