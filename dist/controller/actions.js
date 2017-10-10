'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewActions = exports.getDateCreateBoard = exports.checkCreateActions = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodeTrello = require('node-trello');

var _nodeTrello2 = _interopRequireDefault(_nodeTrello);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _actions = require('../models/actions');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _convertDates = require('./convertDates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkCreateActions = exports.checkCreateActions = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(board, key, token, sinceDate, beforeDate) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                            (0, _request2.default)({
                                uri: 'https://api.trello.com/1/board/' + board + '/actions/?filter=createCard,moveCardToBoard,commentCard,copyCard,convertToCardFromCheckItem,updateCard:idList,updateCard:closed,emailCard,moveListFromBoard&since=' + sinceDate + '&before=' + beforeDate + '&limit=1000&key=' + key + '&token=' + token,
                                method: 'GET'
                            }, function (err, response, body) {
                                if (err) reject((0, _stringify2.default)(err));
                                resolve(body);
                            });
                        }).then(function () {
                            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
                                var len, i, actions, callActions;
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                data = JSON.parse(data);
                                                len = data.length;
                                                i = 0;

                                            case 3:
                                                if (!(i < len)) {
                                                    _context.next = 13;
                                                    break;
                                                }

                                                _context.next = 6;
                                                return _actions.Actions.findOne({ id: data[i].id });

                                            case 6:
                                                actions = _context.sent;
                                                _context.next = 9;
                                                return createnewActions(_actions.Actions, actions, data[i]);

                                            case 9:
                                                callActions = _context.sent;

                                            case 10:
                                                i++;
                                                _context.next = 3;
                                                break;

                                            case 13:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined);
                            }));

                            return function (_x6) {
                                return _ref2.apply(this, arguments);
                            };
                        }()));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function checkCreateActions(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
    };
}();

var getDateCreateBoard = exports.getDateCreateBoard = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(board, key, token) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        return _context3.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                            (0, _request2.default)({
                                uri: 'https://api.trello.com/1/board/' + board + '/actions/?filter=createBoard&key=' + key + '&token=' + token,
                                method: 'GET'
                            }, function (err, response, body) {
                                if (err) reject((0, _stringify2.default)(err));
                                body = JSON.parse(body);
                                resolve(body[0].date);
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function getDateCreateBoard(_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
    };
}();

var createnewActions = exports.createnewActions = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(Actions, actions, data) {
        var d, ymd, newactions, _d, _ymd, _newactions;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        if (actions) {
                            _context4.next = 11;
                            break;
                        }

                        d = new Date(data.date);
                        _context4.next = 4;
                        return (0, _convertDates.convertDates)(d);

                    case 4:
                        ymd = _context4.sent;
                        _context4.next = 7;
                        return Actions.create({
                            id: data.id,
                            idMemberCreator: data.idMemberCreator,
                            memberCreator: data.memberCreator,
                            data: data.data,
                            type: data.type,
                            date: data.date,
                            dateString: ymd
                        });

                    case 7:
                        newactions = _context4.sent;
                        return _context4.abrupt('return', newactions);

                    case 11:
                        if (!(actions.idMemberCreator != data.idMemberCreator || (0, _stringify2.default)(actions.data) != (0, _stringify2.default)(data.data) || actions.type != data.type || actions.date != data.date || (0, _stringify2.default)(actions.memberCreator) != (0, _stringify2.default)(data.memberCreator))) {
                            _context4.next = 22;
                            break;
                        }

                        _d = new Date(data.date);
                        _context4.next = 15;
                        return (0, _convertDates.convertDates)(_d);

                    case 15:
                        _ymd = _context4.sent;
                        _context4.next = 18;
                        return Actions.update({ id: data.id }, { $set: {
                                idMemberCreator: data.idMemberCreator,
                                memberCreator: data.memberCreator,
                                type: data.type
                            } });

                    case 18:
                        _newactions = _context4.sent;
                        return _context4.abrupt('return', _newactions);

                    case 22:
                        return _context4.abrupt('return', false);

                    case 23:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function createnewActions(_x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
    };
}();
//# sourceMappingURL=actions.js.map