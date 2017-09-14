'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _boards = require('boards');

var _boards2 = _interopRequireDefault(_boards);

var _boards3 = require('../controller/boards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../models', function () {});


var mockBoards = new _boards2.default();
var boards = {
    id: "123a",
    name: "xxx",
    labelNames: {
        "black": "COOP",
        "pink": "Handover protocal"
    }
};

test('new boards', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var send, boardsNew, receive, callRec;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        labelNames: {
                            "black": "COOP",
                            "pink": "Handover protocal"
                        }
                    };
                    boardsNew = undefined;
                    _context.next = 4;
                    return (0, _boards3.createnewBoards)(mockBoards, boardsNew, send);

                case 4:
                    receive = _context.sent;
                    callRec = mockBoards.getCreate();

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
                        name: "aaa",
                        labelNames: {
                            "black": "COOP",
                            "pink": "Handover protocal"
                        }
                    };
                    _context2.next = 3;
                    return (0, _boards3.createnewBoards)(mockBoards, boards, send);

                case 3:
                    receive = _context2.sent;
                    callRec = mockBoards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
})));

test('update labelname', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        labelNames: {
                            "black": "XXXX",
                            "pink": "Handover protocal"
                        }
                    };
                    _context3.next = 3;
                    return (0, _boards3.createnewBoards)(mockBoards, boards, send);

                case 3:
                    receive = _context3.sent;
                    callRec = mockBoards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _callee3, undefined);
})));

test('update all', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "aaa",
                        labelNames: {
                            "black": "XXXXX",
                            "pink": "Handover protocal"
                        }
                    };
                    _context4.next = 3;
                    return (0, _boards3.createnewBoards)(mockBoards, boards, send);

                case 3:
                    receive = _context4.sent;
                    callRec = mockBoards.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _callee4, undefined);
})));

test('have boards already', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
    var send, rec;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        labelNames: {
                            "black": "COOP",
                            "pink": "Handover protocal"
                        }
                    };
                    _context5.next = 3;
                    return (0, _boards3.createnewBoards)(mockBoards, boards, send);

                case 3:
                    rec = _context5.sent;

                    expect(rec).toBe(false);

                case 5:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _callee5, undefined);
})));
//# sourceMappingURL=boards.test.js.map