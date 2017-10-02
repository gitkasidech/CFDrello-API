'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.countData = exports.dayCountCards = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dateActionCards = require('../models/dateActionCards');

var _convertDates = require('./convertDates');

var _hourActionCards = require('./hourActionCards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayCountCards = exports.dayCountCards = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        var data, hourActionCards, getDateActionCards;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('GET \'/dateactioncards/' + req.params.idDashboard + '/' + req.params.start + '/' + req.params.end + '\' \uD83E\uDD20 ' + Date());
                        console.log(req.params.start);
                        console.log(req.params.end);

                        data = {
                            idDashboard: req.params.idDashboard,
                            start: req.params.start,
                            end: req.params.end
                        };

                        if (!(data.start == data.end)) {
                            _context.next = 11;
                            break;
                        }

                        _context.next = 7;
                        return (0, _hourActionCards.createHourActionCards)(data);

                    case 7:
                        hourActionCards = _context.sent;

                        res.json(hourActionCards);
                        _context.next = 15;
                        break;

                    case 11:
                        _context.next = 13;
                        return countData(data);

                    case 13:
                        getDateActionCards = _context.sent;

                        res.json(getDateActionCards);

                    case 15:
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

var countData = exports.countData = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(data) {
        var hourActionCards, start, end, listDate, listBack, listInpr, listComp, d, ymdd, dateActionCards, _ymdd$split, _ymdd$split2, year, month, date, day, getDateActionCards;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (!(data.start == data.end)) {
                            _context2.next = 5;
                            break;
                        }

                        _context2.next = 3;
                        return (0, _hourActionCards.createHourActionCards)(data);

                    case 3:
                        hourActionCards = _context2.sent;
                        return _context2.abrupt('return', hourActionCards);

                    case 5:
                        start = data.start;
                        end = data.end;
                        listDate = [];
                        listBack = [];
                        listInpr = [];
                        listComp = [];
                        d = new Date(start);

                    case 12:
                        if (!(d <= new Date(end))) {
                            _context2.next = 29;
                            break;
                        }

                        _context2.next = 15;
                        return (0, _convertDates.convertDates)(d);

                    case 15:
                        ymdd = _context2.sent;
                        _context2.next = 18;
                        return _dateActionCards.DateActionCards.findOne({ dateString: ymdd, idDashboard: data.idDashboard });

                    case 18:
                        dateActionCards = _context2.sent;

                        if (!dateActionCards) {
                            dateActionCards = {
                                dateString: ymdd,
                                countBack: 0,
                                countInpr: 0,
                                countComp: 0
                            };
                        }
                        _ymdd$split = ymdd.split('-'), _ymdd$split2 = (0, _slicedToArray3.default)(_ymdd$split, 4), year = _ymdd$split2[0], month = _ymdd$split2[1], date = _ymdd$split2[2], day = _ymdd$split2[3];

                        dateActionCards.dateString = [year, month, date].join('-');
                        listDate.push(dateActionCards.dateString);
                        listBack.push(dateActionCards.countBack);
                        listInpr.push(dateActionCards.countInpr);
                        listComp.push(dateActionCards.countComp);

                    case 26:
                        d.setDate(d.getDate() + 1);
                        _context2.next = 12;
                        break;

                    case 29:
                        getDateActionCards = {
                            listDate: listDate,
                            listBack: listBack,
                            listInpr: listInpr,
                            listComp: listComp
                        };
                        return _context2.abrupt('return', getDateActionCards);

                    case 31:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function countData(_x4) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=getDateActionCards.js.map