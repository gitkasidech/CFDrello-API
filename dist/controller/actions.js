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

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _convertDates = require('./convertDates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkCreateActions = exports.checkCreateActions = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(board, key, token) {
        var t;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        t = new _nodeTrello2.default(key, token);
                        return _context2.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                            t.get("/1/boards/" + board + "/actions/?limit=1000", function (err, data) {
                                if (err) reject(err);
                                resolve(data);
                            });
                        }).then(function () {
                            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
                                var len, i, actions, callActions;
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                len = data.length;
                                                i = 0;

                                            case 2:
                                                if (!(i < len)) {
                                                    _context.next = 12;
                                                    break;
                                                }

                                                _context.next = 5;
                                                return _actions.Actions.findOne({ id: data[i].id });

                                            case 5:
                                                actions = _context.sent;
                                                _context.next = 8;
                                                return createnewActions(_actions.Actions, actions, data[i]);

                                            case 8:
                                                callActions = _context.sent;

                                            case 9:
                                                i++;
                                                _context.next = 2;
                                                break;

                                            case 12:
                                                return _context.abrupt('return', data[len - 1].date);

                                            case 13:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined);
                            }));

                            return function (_x4) {
                                return _ref2.apply(this, arguments);
                            };
                        }()));

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
        var d, ymd, newactions, _d, _ymd, _newactions;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (actions) {
                            _context3.next = 11;
                            break;
                        }

                        d = new Date(data.date);
                        _context3.next = 4;
                        return (0, _convertDates.convertDates)(d);

                    case 4:
                        ymd = _context3.sent;
                        _context3.next = 7;
                        return Actions.create({
                            id: data.id,
                            idMemberCreator: data.idMemberCreator,
                            data: data.data,
                            type: data.type,
                            date: data.date,
                            dateString: ymd
                        });

                    case 7:
                        newactions = _context3.sent;
                        return _context3.abrupt('return', newactions);

                    case 11:
                        if (!(actions.idMemberCreator != data.idMemberCreator || (0, _stringify2.default)(actions.data) != (0, _stringify2.default)(data.data) || actions.type != data.type || actions.date != data.date)) {
                            _context3.next = 22;
                            break;
                        }

                        _d = new Date(data.date);
                        _context3.next = 15;
                        return (0, _convertDates.convertDates)(_d);

                    case 15:
                        _ymd = _context3.sent;
                        _context3.next = 18;
                        return Actions.update({ id: data.id }, { $set: {
                                idMemberCreator: data.idMemberCreator,
                                data: data.data,
                                type: data.type,
                                date: data.date,
                                dateString: _ymd
                            } });

                    case 18:
                        _newactions = _context3.sent;
                        return _context3.abrupt('return', _newactions);

                    case 22:
                        return _context3.abrupt('return', false);

                    case 23:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewActions(_x5, _x6, _x7) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=actions.js.map