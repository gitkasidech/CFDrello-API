'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _hourActionCards = require('hourActionCards');

var _hourActionCards2 = _interopRequireDefault(_hourActionCards);

var _hourActionCards3 = require('../controller/hourActionCards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../models', function () {});


var mockHourActionCards = new _hourActionCards2.default();

var hourActionCards = {
    dateString: "2017-08-13-0",
    timeHour: 14,
    countBack: 23,
    countInpr: 5,
    countComp: 0,
    idDashboard: "a1"
};

test('new hourActionCards', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var send, hourActionCardsNew, receive, callRec;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    send = {
                        dateString: "2017-08-13-0",
                        timeHour: 14,
                        countBack: 23,
                        countInpr: 5,
                        countComp: 0,
                        idDashboard: "a1"
                    };
                    hourActionCardsNew = undefined;
                    _context.next = 4;
                    return (0, _hourActionCards3.createnewHourActionCards)(mockHourActionCards, send, hourActionCardsNew);

                case 4:
                    receive = _context.sent;
                    callRec = mockHourActionCards.getCreate();

                    expect(callRec.length).toEqual(1);

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
})));

test('update countBack', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    send = {
                        dateString: "2017-08-13-0",
                        timeHour: 14,
                        countBack: 25,
                        countInpr: 5,
                        countComp: 0,
                        idDashboard: "a1"
                    };
                    _context2.next = 3;
                    return (0, _hourActionCards3.createnewHourActionCards)(mockHourActionCards, send, hourActionCards);

                case 3:
                    receive = _context2.sent;
                    callRec = mockHourActionCards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
})));

test('update countInpr', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    send = {
                        dateString: "2017-08-13-0",
                        timeHour: 14,
                        countBack: 23,
                        countInpr: 6,
                        countComp: 0,
                        idDashboard: "a1"
                    };
                    _context3.next = 3;
                    return (0, _hourActionCards3.createnewHourActionCards)(mockHourActionCards, send, hourActionCards);

                case 3:
                    receive = _context3.sent;
                    callRec = mockHourActionCards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _callee3, undefined);
})));

test('update countComp', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    send = {
                        dateString: "2017-08-13-0",
                        timeHour: 14,
                        countBack: 23,
                        countInpr: 5,
                        countComp: 1,
                        idDashboard: "a1"
                    };
                    _context4.next = 3;
                    return (0, _hourActionCards3.createnewHourActionCards)(mockHourActionCards, send, hourActionCards);

                case 3:
                    receive = _context4.sent;
                    callRec = mockHourActionCards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _callee4, undefined);
})));

test('update all', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    send = {
                        dateString: "2017-08-13-0",
                        timeHour: 14,
                        countBack: 25,
                        countInpr: 6,
                        countComp: 1,
                        idDashboard: "a1"
                    };
                    _context5.next = 3;
                    return (0, _hourActionCards3.createnewHourActionCards)(mockHourActionCards, send, hourActionCards);

                case 3:
                    receive = _context5.sent;
                    callRec = mockHourActionCards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _callee5, undefined);
})));

test('have hourActionCards already', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
    var send, rec;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    send = {
                        dateString: "2017-08-13-0",
                        timeHour: 14,
                        countBack: 23,
                        countInpr: 5,
                        countComp: 0,
                        idDashboard: "a1"
                    };
                    _context6.next = 3;
                    return (0, _hourActionCards3.createnewHourActionCards)(mockHourActionCards, send, hourActionCards);

                case 3:
                    rec = _context6.sent;

                    expect(rec).toBe(false);

                case 5:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _callee6, undefined);
})));
//# sourceMappingURL=hourActionCards.test.js.map