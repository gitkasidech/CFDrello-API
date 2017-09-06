'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewHourActionCards = exports.getYesterday = exports.createHourActionCards = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _hourActionCards = require('../models/hourActionCards');

var _actions = require('../models/actions');

var _dashboards = require('../models/dashboards');

var _dateActionCards = require('../models/dateActionCards');

var _convertDates = require('./convertDates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHourActionCards = exports.createHourActionCards = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
        var dataYesterday, today, thisDate, actions, dashboard, listBack, listInpr, listComp, len, dataHour, dataBack, dataInpr, dataComp, i, j, _data, d, hour, allData, hourActionCards, callHourActionCards, getHourActionCards;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return getYesterday(data);

                    case 2:
                        dataYesterday = _context.sent;

                        console.log(dataYesterday);
                        today = new Date(data.start);
                        _context.next = 7;
                        return (0, _convertDates.convertDates)(today);

                    case 7:
                        thisDate = _context.sent;

                        console.log(thisDate);
                        _context.next = 11;
                        return _actions.Actions.find({ dateString: thisDate });

                    case 11:
                        actions = _context.sent;

                        console.log(actions);
                        _context.next = 15;
                        return _dashboards.Dashboards.findOne({ _id: data.idDashboard });

                    case 15:
                        dashboard = _context.sent;

                        console.log(dashboard);

                        if (dashboard) {
                            _context.next = 19;
                            break;
                        }

                        return _context.abrupt('return', "Error!! Not found dashboard");

                    case 19:
                        listBack = dashboard.listBack;
                        listInpr = dashboard.listInpr;
                        listComp = dashboard.listComp;
                        len = actions.length;
                        dataHour = [];
                        dataBack = [];
                        dataInpr = [];
                        dataComp = [];
                        i = 0;

                    case 28:
                        if (!(i <= 23)) {
                            _context.next = 45;
                            break;
                        }

                        for (j = 0; j < len; j++) {
                            _data = actions[j].data;
                            d = new Date(actions[j].date);
                            hour = d.getHours();

                            if (i == hour) {
                                if (actions[j].type == "createCard") {
                                    if (listBack.indexOf(_data.list.id) != -1) dataYesterday.countBack++;else if (listInpr.indexOf(_data.list.id) != -1) dataYesterday.countInpr++;else if (listComp.indexOf(_data.list.id) != -1) dataYesterday.countComp++;
                                } else if (actions[j].type == "updateCard" && _data.listAfter && _data.listBefore) {
                                    if (listBack.indexOf(_data.listAfter.id) != -1) dataYesterday.countBack++;else if (listInpr.indexOf(_data.listAfter.id) != -1) dataYesterday.countInpr++;else if (listComp.indexOf(_data.listAfter.id) != -1) dataYesterday.countComp++;

                                    if (listBack.indexOf(_data.listBefore.id) != -1) dataYesterday.countBack--;else if (listInpr.indexOf(_data.listBefore.id) != -1) dataYesterday.countInpr--;else if (listComp.indexOf(_data.listBefore.id) != -1) dataYesterday.countComp--;
                                }
                            }
                        }
                        allData = {
                            dateString: thisDate,
                            timeHour: i,
                            countBack: dataYesterday.countBack,
                            countInpr: dataYesterday.countInpr,
                            countComp: dataYesterday.countComp,
                            idDashboard: dashboard._id
                        };
                        _context.next = 33;
                        return _hourActionCards.HourActionCards.findOne({
                            dateString: allData.dateString,
                            timeHour: allData.timeHour,
                            idDashboard: allData.idDashboard
                        });

                    case 33:
                        hourActionCards = _context.sent;

                        console.log(allData);
                        dataHour.push(i);
                        dataBack.push(allData.countBack);
                        dataInpr.push(allData.countInpr);
                        dataComp.push(allData.countComp);

                        _context.next = 41;
                        return createnewHourActionCards(_hourActionCards.HourActionCards, allData, hourActionCards);

                    case 41:
                        callHourActionCards = _context.sent;

                    case 42:
                        i++;
                        _context.next = 28;
                        break;

                    case 45:
                        getHourActionCards = {
                            dataHour: dataHour,
                            dataBack: dataBack,
                            dataInpr: dataInpr,
                            dataComp: dataComp
                        };
                        return _context.abrupt('return', getHourActionCards);

                    case 47:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function createHourActionCards(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getYesterday = exports.getYesterday = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(data) {
        var d, yesterday, dateActionCards, _yesterday$split, _yesterday$split2, year, month, date, day, dateY;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        d = new Date(data.start);

                        d.setDate(d.getDate() - 1);
                        _context2.next = 4;
                        return (0, _convertDates.convertDates)(d);

                    case 4:
                        yesterday = _context2.sent;

                        console.log("yesterday = " + yesterday);
                        _context2.next = 8;
                        return _dateActionCards.DateActionCards.findOne({ dateString: yesterday, idDashboard: data.idDashboard });

                    case 8:
                        dateActionCards = _context2.sent;

                        if (!dateActionCards) {
                            _yesterday$split = yesterday.split('-'), _yesterday$split2 = (0, _slicedToArray3.default)(_yesterday$split, 4), year = _yesterday$split2[0], month = _yesterday$split2[1], date = _yesterday$split2[2], day = _yesterday$split2[3];

                            yesterday = [year, month, date].join('-');
                            dateY = new Date(yesterday);

                            dateActionCards = {
                                date: dateY,
                                dateString: yesterday,
                                countBack: 0,
                                countInpr: 0,
                                countComp: 0,
                                idDashboard: data.idDashboard
                            };
                        }
                        return _context2.abrupt('return', dateActionCards);

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getYesterday(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var createnewHourActionCards = exports.createnewHourActionCards = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(HourActionCards, allData, hourActionCards) {
        var newHourActionCards, _newHourActionCards;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (hourActionCards) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 3;
                        return HourActionCards.create(allData);

                    case 3:
                        newHourActionCards = _context3.sent;
                        return _context3.abrupt('return', newHourActionCards);

                    case 7:
                        if (!(allData.countBack != hourActionCards.countBack || allData.countInpr != hourActionCards.countInpr || allData.countComp != hourActionCards.countComp)) {
                            _context3.next = 14;
                            break;
                        }

                        _context3.next = 10;
                        return HourActionCards.update({ id: hourActionCards._id }, { $set: {
                                countBack: allData.countBack,
                                countInpr: allData.countInpr,
                                countComp: allData.countComp
                            } });

                    case 10:
                        _newHourActionCards = _context3.sent;
                        return _context3.abrupt('return', _newHourActionCards);

                    case 14:
                        return _context3.abrupt('return', false);

                    case 15:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewHourActionCards(_x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=hourActionCards.js.map