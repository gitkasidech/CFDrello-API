'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewActions = exports.checkCreateActions = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodeTrello = require('node-trello');

var _nodeTrello2 = _interopRequireDefault(_nodeTrello);

var _actions = require('../models/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkCreateActions = exports.checkCreateActions = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(board, key, token) {
        var t;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        t = new _nodeTrello2.default(key, token);

                        t.get("/1/boards/" + board + "/actions", function () {
                            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(err, data) {
                                var len, i, actions, callActions;
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
                                                len = data.length;
                                                i = 0;

                                            case 4:
                                                if (!(i < len)) {
                                                    _context.next = 15;
                                                    break;
                                                }

                                                _context.next = 7;
                                                return _actions.Actions.findOne({ id: data[i].id });

                                            case 7:
                                                actions = _context.sent;
                                                _context.next = 10;
                                                return createnewActions(_actions.Actions, actions, data[i]);

                                            case 10:
                                                callActions = _context.sent;

                                                if (callActions) console.log("create or update new action complete");else console.log("have a action already!!");

                                            case 12:
                                                i++;
                                                _context.next = 4;
                                                break;

                                            case 15:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined);
                            }));

                            return function (_x4, _x5) {
                                return _ref2.apply(this, arguments);
                            };
                        }());

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function checkCreateActions(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var createnewActions = exports.createnewActions = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(Actions, actions, data) {
        var newactions, _newactions;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (actions) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 3;
                        return Actions.create({
                            id: data.id,
                            idMemberCreator: data.idMemberCreator,
                            data: data.data,
                            type: data.type,
                            date: data.date
                        });

                    case 3:
                        newactions = _context3.sent;
                        return _context3.abrupt('return', newactions);

                    case 7:
                        if (!(actions.idMemberCreator != data.idMemberCreator || (0, _stringify2.default)(actions.data) != (0, _stringify2.default)(data.data) || actions.type != data.type || actions.date != data.date)) {
                            _context3.next = 14;
                            break;
                        }

                        _context3.next = 10;
                        return Actions.update({ id: data.id }, { $set: {
                                idMemberCreator: data.idMemberCreator,
                                data: data.data,
                                type: data.type,
                                date: data.date
                            } });

                    case 10:
                        _newactions = _context3.sent;
                        return _context3.abrupt('return', _newactions);

                    case 14:
                        return _context3.abrupt('return', false);

                    case 15:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewActions(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=actions.js.map