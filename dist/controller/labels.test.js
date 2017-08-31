'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _labels = require('labels');

var _labels2 = _interopRequireDefault(_labels);

var _labels3 = require('./labels');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../models', function () {});


var mockLabels = new _labels2.default();
var labels = {
    id: "123a",
    name: "xxx",
    color: "red",
    uses: "10",
    idBoard: "456z"
};

test('new labels', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var send, labelsNew, receive, callRec;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        color: "red",
                        uses: "10",
                        idBoard: "456z"
                    };
                    labelsNew = undefined;
                    _context.next = 4;
                    return (0, _labels3.createnewLabels)(mockLabels, labelsNew, send);

                case 4:
                    receive = _context.sent;
                    callRec = mockLabels.getCreate();

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
                        color: "red",
                        uses: "10",
                        idBoard: "456z"
                    };
                    _context2.next = 3;
                    return (0, _labels3.createnewLabels)(mockLabels, labels, send);

                case 3:
                    receive = _context2.sent;
                    callRec = mockLabels.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
})));

test('update color', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        color: "blue",
                        uses: "10",
                        idBoard: "456z"
                    };
                    _context3.next = 3;
                    return (0, _labels3.createnewLabels)(mockLabels, labels, send);

                case 3:
                    receive = _context3.sent;
                    callRec = mockLabels.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _callee3, undefined);
})));

test('update name', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        color: "red",
                        uses: "15",
                        idBoard: "456z"
                    };
                    _context4.next = 3;
                    return (0, _labels3.createnewLabels)(mockLabels, labels, send);

                case 3:
                    receive = _context4.sent;
                    callRec = mockLabels.getUpdate();

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
                        id: "123a",
                        name: "yyy",
                        color: "blue",
                        uses: "15",
                        idBoard: "456z"
                    };
                    _context5.next = 3;
                    return (0, _labels3.createnewLabels)(mockLabels, labels, send);

                case 3:
                    receive = _context5.sent;
                    callRec = mockLabels.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _callee5, undefined);
})));

test('have labels already', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
    var send, rec;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    send = {
                        id: "123a",
                        name: "xxx",
                        color: "red",
                        uses: "10",
                        idBoard: "456z"
                    };
                    _context6.next = 3;
                    return (0, _labels3.createnewLabels)(mockLabels, labels, send);

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
//# sourceMappingURL=labels.test.js.map