'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.countData = exports.dayCountCards = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cards = require('../models/cards');

var _actions = require('../models/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayCountCards = exports.dayCountCards = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        var data, getActionCards;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('GET \'/actioncards/' + req.params.idDashboard + '/' + req.params.start + '/' + req.params.end + '\' \uD83E\uDD20 ' + Date());
                        console.log(req.params.start);
                        console.log(req.params.end);

                        data = {
                            idDashboard: req.params.idDashboard,
                            start: req.params.start,
                            end: req.params.end
                        };
                        _context.next = 6;
                        return countData(data);

                    case 6:
                        getActionCards = _context.sent;

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function dayCountCards(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var countData = exports.countData = function countData(data) {
    console.log(data.idDashboard);
    console.log(data.start);
    console.log(data.end);
    return data;
};
//# sourceMappingURL=getDateActionCards.js.map