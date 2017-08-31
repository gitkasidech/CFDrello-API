'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cards = require('cards');

var _cards2 = _interopRequireDefault(_cards);

var _cards3 = require('./cards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../models', function () {});


var mockCards = new _cards2.default();
var cards = {
    id: "123a",
    name: "xxx",
    idBoard: "456z",
    idList: "789s",
    idMembers: ["1a", "2b"],
    idLabels: ["a1", "b2"]
};

test('new cards', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var send, cardsNew, receive, callRec;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        idBoard: "456z",
                        idList: "789s",
                        idMembers: ["1a", "2b"],
                        idLabels: ["a1", "b2"]
                    };
                    cardsNew = undefined;
                    _context.next = 4;
                    return (0, _cards3.createnewCards)(mockCards, cardsNew, send);

                case 4:
                    receive = _context.sent;
                    callRec = mockCards.getCreate();

                    expect(callRec.length).toEqual(1);

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
})));

test('update name', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "yyy",
                        idBoard: "456z",
                        idList: "789s",
                        idMembers: ["1a", "2b"],
                        idLabels: ["a1", "b2"]
                    };
                    _context2.next = 3;
                    return (0, _cards3.createnewCards)(mockCards, cards, send);

                case 3:
                    receive = _context2.sent;
                    callRec = mockCards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
})));

test('update idList', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        idBoard: "456z",
                        idList: "789t",
                        idMembers: ["1a", "2b"],
                        idLabels: ["a1", "b2"]
                    };
                    _context3.next = 3;
                    return (0, _cards3.createnewCards)(mockCards, cards, send);

                case 3:
                    receive = _context3.sent;
                    callRec = mockCards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _callee3, undefined);
})));

test('update idMembers', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        idBoard: "456z",
                        idList: "789s",
                        idMembers: ["111a", "222b"],
                        idLabels: ["a1", "b2"]
                    };
                    _context4.next = 3;
                    return (0, _cards3.createnewCards)(mockCards, cards, send);

                case 3:
                    receive = _context4.sent;
                    callRec = mockCards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _callee4, undefined);
})));

test('update idLabels', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        idBoard: "456z",
                        idList: "789s",
                        idMembers: ["1a", "2b"],
                        idLabels: ["a111", "b222"]
                    };
                    _context5.next = 3;
                    return (0, _cards3.createnewCards)(mockCards, cards, send);

                case 3:
                    receive = _context5.sent;
                    callRec = mockCards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _callee5, undefined);
})));

test('update all', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "yyy",
                        idBoard: "456z",
                        idList: "789t",
                        idMembers: ["111a", "222b"],
                        idLabels: ["a111", "b222"]
                    };
                    _context6.next = 3;
                    return (0, _cards3.createnewCards)(mockCards, cards, send);

                case 3:
                    receive = _context6.sent;
                    callRec = mockCards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _callee6, undefined);
})));

test('have cards already', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
    var send, rec;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        idBoard: "456z",
                        idList: "789s",
                        idMembers: ["1a", "2b"],
                        idLabels: ["a1", "b2"]
                    };
                    _context7.next = 3;
                    return (0, _cards3.createnewCards)(mockCards, cards, send);

                case 3:
                    rec = _context7.sent;

                    expect(rec).toBe(false);

                case 5:
                case 'end':
                    return _context7.stop();
            }
        }
    }, _callee7, undefined);
})));
//# sourceMappingURL=cards.test.js.map