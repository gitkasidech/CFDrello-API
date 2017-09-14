'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkInf = exports.saveLCAD = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _labels = require('./labels');

var _cards = require('./cards');

var _actions = require('./actions');

var _getDateActionCards = require('./getDateActionCards');

var _dateActionCards = require('./dateActionCards');

var _convertDates = require('./convertDates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveLCAD = exports.saveLCAD = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        var inf, callInf, key, promises, _ref2, _ref3, callLabels, callCards, callActions, postDateActionCards, d, endDate, day, startDate, _startDate$split, _startDate$split2, yearS, monthS, dateS, dayS, _endDate$split, _endDate$split2, yearE, monthE, dateE, dayE, data, getDateActionCards;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('POST \'/createlcad\' \uD83E\uDD20 ' + Date());
                        inf = req.body;
                        _context.next = 4;
                        return checkInf(inf);

                    case 4:
                        callInf = _context.sent;

                        if (!callInf) {
                            _context.next = 7;
                            break;
                        }

                        return _context.abrupt('return', res.status(500).send("format should be"));

                    case 7:
                        key = "662fa775f48bd56cea11e8be634da284";
                        promises = [(0, _labels.checkCreateLabels)(inf.idBoard, key, inf.token), (0, _cards.checkCreateCards)(inf.idBoard, key, inf.token), (0, _actions.checkCreateActions)(inf.idBoard, key, inf.token)];
                        _context.next = 11;
                        return _promise2.default.all(promises);

                    case 11:
                        _ref2 = _context.sent;
                        _ref3 = (0, _slicedToArray3.default)(_ref2, 3);
                        callLabels = _ref3[0];
                        callCards = _ref3[1];
                        callActions = _ref3[2];
                        _context.next = 18;
                        return (0, _dateActionCards.createDateActionCards)(callActions, inf);

                    case 18:
                        postDateActionCards = _context.sent;
                        d = new Date();

                        d.setDate(d.getDate() - 1);
                        _context.next = 23;
                        return (0, _convertDates.convertDates)(d);

                    case 23:
                        endDate = _context.sent;
                        day = d.getDay();

                        d.setDate(d.getDate() - day);
                        _context.next = 28;
                        return (0, _convertDates.convertDates)(d);

                    case 28:
                        startDate = _context.sent;
                        _startDate$split = startDate.split('-'), _startDate$split2 = (0, _slicedToArray3.default)(_startDate$split, 4), yearS = _startDate$split2[0], monthS = _startDate$split2[1], dateS = _startDate$split2[2], dayS = _startDate$split2[3];
                        _endDate$split = endDate.split('-'), _endDate$split2 = (0, _slicedToArray3.default)(_endDate$split, 4), yearE = _endDate$split2[0], monthE = _endDate$split2[1], dateE = _endDate$split2[2], dayE = _endDate$split2[3];

                        startDate = [yearS, monthS, dateS].join('-');
                        endDate = [yearE, monthE, dateE].join('-');
                        data = {
                            idDashboard: inf._id,
                            start: startDate,
                            end: endDate
                        };
                        _context.next = 36;
                        return (0, _getDateActionCards.countData)(data);

                    case 36:
                        getDateActionCards = _context.sent;

                        res.json(getDateActionCards);

                    case 38:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function saveLCAD(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var checkInf = exports.checkInf = function checkInf(inf) {
    if (!inf.name || !inf.idBoard || !inf.listComp || !inf.colorComp || !inf.listInpr || !inf.colorInpr || !inf.listBack || !inf.colorBack || !inf.idMember || !inf.token) {
        return true;
    } else {
        return false;
    }
};
//# sourceMappingURL=createLCAD.js.map