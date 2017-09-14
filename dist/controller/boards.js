'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewBoards = exports.checkCreateBoard = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodeTrello = require('node-trello');

var _nodeTrello2 = _interopRequireDefault(_nodeTrello);

var _boards = require('../models/boards');

var _lists = require('./lists');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkCreateBoard = exports.checkCreateBoard = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(inf) {
        var len, t, _loop, i;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        len = inf.idBoards.length;
                        t = new _nodeTrello2.default(inf.app_id, inf.token);

                        _loop = function _loop(i) {
                            t.get("/1/boards/" + inf.idBoards[i], function () {
                                var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(err, data) {
                                    var boards, callcreate, callLists;
                                    return _regenerator2.default.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    if (!err) {
                                                        _context.next = 2;
                                                        break;
                                                    }

                                                    throw err;

                                                case 2:
                                                    _context.next = 4;
                                                    return _boards.Boards.findOne({ id: inf.idBoards[i] });

                                                case 4:
                                                    boards = _context.sent;
                                                    _context.next = 7;
                                                    return createnewBoards(_boards.Boards, boards, data);

                                                case 7:
                                                    callcreate = _context.sent;
                                                    _context.next = 10;
                                                    return (0, _lists.checkCreateLists)(inf.app_id, inf.token, inf.idBoards[i]);

                                                case 10:
                                                    callLists = _context.sent;

                                                case 11:
                                                case 'end':
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, undefined);
                                }));

                                return function (_x2, _x3) {
                                    return _ref2.apply(this, arguments);
                                };
                            }());
                        };

                        for (i = 0; i < len; i++) {
                            _loop(i);
                        }

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function checkCreateBoard(_x) {
        return _ref.apply(this, arguments);
    };
}();

var createnewBoards = exports.createnewBoards = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(Boards, boards, data) {
        var newboard, _newboard;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (boards) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 3;
                        return Boards.create({
                            id: data.id,
                            name: data.name,
                            labelNames: data.labelNames
                        });

                    case 3:
                        newboard = _context3.sent;
                        return _context3.abrupt('return', newboard);

                    case 7:
                        if (!(boards.name != data.name || (0, _stringify2.default)(boards.labelNames) != (0, _stringify2.default)(data.labelNames))) {
                            _context3.next = 14;
                            break;
                        }

                        _context3.next = 10;
                        return Boards.update({ id: data.id }, { $set: {
                                name: data.name,
                                labelNames: data.labelNames
                            } });

                    case 10:
                        _newboard = _context3.sent;
                        return _context3.abrupt('return', _newboard);

                    case 14:
                        return _context3.abrupt('return', false);

                    case 15:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewBoards(_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=boards.js.map