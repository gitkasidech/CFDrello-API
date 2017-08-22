'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _lists = require('lists');

var _lists2 = _interopRequireDefault(_lists);

var _lists3 = require('./lists');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../models', function () {});


var mockLists = new _lists2.default();
var lists = {
    id: "123x",
    name: "xxx",
    idBoard: "456y"
};

test('new lists', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var send, listsNew, receive, callRec;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    send = {
                        id: "123x",
                        name: "xxx",
                        idBoard: "456y"
                    };
                    listsNew = undefined;
                    _context.next = 4;
                    return (0, _lists3.createnewLists)(mockLists, listsNew, send);

                case 4:
                    receive = _context.sent;
                    callRec = mockLists.getCreate();

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
                        id: "123x",
                        name: "aaa",
                        idBoard: "456y"
                    };
                    _context2.next = 3;
                    return (0, _lists3.createnewLists)(mockLists, lists, send);

                case 3:
                    receive = _context2.sent;
                    callRec = mockLists.getUpdate();

                    expect(callRec[0]).toEqual(send);

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
})));

test('have lists already', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var send, rec;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    send = {
                        id: "123x",
                        name: "xxx",
                        idBoard: "456y"
                    };
                    _context3.next = 3;
                    return (0, _lists3.createnewLists)(mockLists, lists, send);

                case 3:
                    rec = _context3.sent;

                    expect(rec).toBe(false);

                case 5:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _callee3, undefined);
})));
//# sourceMappingURL=lists.test.js.map