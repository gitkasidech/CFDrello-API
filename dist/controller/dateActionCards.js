'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewDateActionCards = exports.createDateActionCards = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dateActionCards = require('../models/dateActionCards');

var _actions = require('../models/actions');

var _convertDates = require('./convertDates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDateActionCards = exports.createDateActionCards = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dateStart, dashboard) {
        var now, countBack, countInpr, countComp, d, ymd, dataThisDay, len, listBack, listInpr, listComp, dateAction, i, data, allData, dateActionCards, callDateActionCards;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        now = new Date();
                        countBack = 0;
                        countInpr = 0;
                        countComp = 0;
                        d = new Date(dateStart);

                    case 5:
                        if (!(d <= now)) {
                            _context.next = 28;
                            break;
                        }

                        _context.next = 8;
                        return (0, _convertDates.convertDates)(d);

                    case 8:
                        ymd = _context.sent;
                        _context.next = 11;
                        return _actions.Actions.find({ dateString: ymd });

                    case 11:
                        dataThisDay = _context.sent;
                        len = dataThisDay.length;
                        listBack = dashboard.listBack;
                        listInpr = dashboard.listInpr;
                        listComp = dashboard.listComp;
                        dateAction = d;

                        for (i = 0; i < len; i++) {
                            data = dataThisDay[i].data;

                            if (dataThisDay[i].type == "createCard" || dataThisDay[i].type == "moveCardToBoard") {
                                if (listBack.indexOf(data.list.id) != -1) countBack++;else if (listInpr.indexOf(data.list.id) != -1) countInpr++;else if (listComp.indexOf(data.list.id) != -1) countComp++;
                                dateAction = dataThisDay[i].date;
                            } else if (dataThisDay[i].type == "updateCard" && data.listAfter && data.listBefore) {
                                if (listBack.indexOf(data.listAfter.id) != -1) countBack++;else if (listInpr.indexOf(data.listAfter.id) != -1) countInpr++;else if (listComp.indexOf(data.listAfter.id) != -1) countComp++;

                                if (listBack.indexOf(data.listBefore.id) != -1) countBack--;else if (listInpr.indexOf(data.listBefore.id) != -1) countInpr--;else if (listComp.indexOf(data.listBefore.id) != -1) countComp--;
                                dateAction = dataThisDay[i].date;
                            } else if (dataThisDay[i].type == "updateCard" && data.card.closed == false && data.old.closed == true) {
                                if (listBack.indexOf(data.list.id) != -1) countBack++;else if (listInpr.indexOf(data.list.id) != -1) countInpr++;else if (listComp.indexOf(data.list.id) != -1) countComp++;
                                dateAction = dataThisDay[i].date;
                            } else if (dataThisDay[i].type == "updateCard" && data.card.closed == true && data.old.closed == false) {
                                if (listBack.indexOf(data.list.id) != -1) countBack--;else if (listInpr.indexOf(data.list.id) != -1) countInpr--;else if (listComp.indexOf(data.list.id) != -1) countComp--;
                                dateAction = dataThisDay[i].date;
                            }
                        }
                        allData = {
                            date: dateAction,
                            dateString: ymd,
                            countBack: countBack,
                            countInpr: countInpr,
                            countComp: countComp,
                            idDashboard: dashboard._id
                        };
                        _context.next = 21;
                        return _dateActionCards.DateActionCards.findOne({ dateString: allData.dateString, idDashboard: allData.idDashboard });

                    case 21:
                        dateActionCards = _context.sent;
                        _context.next = 24;
                        return createnewDateActionCards(_dateActionCards.DateActionCards, allData, dateActionCards);

                    case 24:
                        callDateActionCards = _context.sent;

                    case 25:
                        d.setDate(d.getDate() + 1);
                        _context.next = 5;
                        break;

                    case 28:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function createDateActionCards(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var createnewDateActionCards = exports.createnewDateActionCards = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(DateActionCards, allData, dateActionCards) {
        var newDateActionCards, _newDateActionCards;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (dateActionCards) {
                            _context2.next = 7;
                            break;
                        }

                        _context2.next = 3;
                        return DateActionCards.create(allData);

                    case 3:
                        newDateActionCards = _context2.sent;
                        return _context2.abrupt('return', newDateActionCards);

                    case 7:
                        if (!(allData.countBack != dateActionCards.countBack || allData.countInpr != dateActionCards.countInpr || allData.countComp != dateActionCards.countComp)) {
                            _context2.next = 14;
                            break;
                        }

                        _context2.next = 10;
                        return DateActionCards.update({ _id: dateActionCards._id }, { $set: {
                                countBack: allData.countBack,
                                countInpr: allData.countInpr,
                                countComp: allData.countComp
                            } });

                    case 10:
                        _newDateActionCards = _context2.sent;
                        return _context2.abrupt('return', _newDateActionCards);

                    case 14:
                        return _context2.abrupt('return', false);

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function createnewDateActionCards(_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=dateActionCards.js.map