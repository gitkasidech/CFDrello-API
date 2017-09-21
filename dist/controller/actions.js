'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewActions = exports.checkCreateActions = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodeTrello = require('node-trello');

var _nodeTrello2 = _interopRequireDefault(_nodeTrello);

var _actions5 = require('../models/actions');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _convertDates = require('./convertDates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkCreateActions = exports.checkCreateActions = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(board, key, token) {
        var t;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        t = new _nodeTrello2.default(key, token);
                        // return new Promise((resolve, reject) => {
                        //     t.get("/1/boards/"+board+"/actions/?filter=createCard,moveCardToBoard,commentCard,updateCard:idList,updateCard:closed&limit=1000", (err, data) =>{
                        //         if (err) reject(err)
                        //         resolve(data)
                        //     })
                        // }).then(async (data) => {
                        //         const len = data.length
                        //         for (let i = 0; i < len; i++) {
                        //             const actions = await Actions.findOne({ id: (data[i]).id })
                        //             const callActions = await createnewActions(Actions, actions, data[i])
                        //             // if (callActions)
                        //             //     console.log("create or update new action complete")
                        //             // else
                        //             //     console.log("have a action already!!")
                        //         }
                        //         return  data[len-1].date

                        // })

                        return _context6.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                            t.get("/1/boards/" + board + "/actions/?filter=updateCard:closed&limit=1000", function (err, data) {
                                if (err) reject((0, _stringify2.default)(err));
                                resolve(data);
                            });
                        }).then(function () {
                            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(data) {
                                var len, i, actions, callActions;
                                return _regenerator2.default.wrap(function _callee5$(_context5) {
                                    while (1) {
                                        switch (_context5.prev = _context5.next) {
                                            case 0:
                                                len = data.length;
                                                i = 0;

                                            case 2:
                                                if (!(i < len)) {
                                                    _context5.next = 12;
                                                    break;
                                                }

                                                _context5.next = 5;
                                                return _actions5.Actions.findOne({ id: data[i].id });

                                            case 5:
                                                actions = _context5.sent;
                                                _context5.next = 8;
                                                return createnewActions(_actions5.Actions, actions, data[i]);

                                            case 8:
                                                callActions = _context5.sent;

                                            case 9:
                                                i++;
                                                _context5.next = 2;
                                                break;

                                            case 12:
                                                return _context5.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                                                    t.get("/1/boards/" + board + "/actions/?filter=updateCard:idList&limit=1000", function (err, data) {
                                                        if (err) reject(err);
                                                        resolve(data);
                                                    });
                                                }).then(function () {
                                                    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(data) {
                                                        var len, _i, _actions, _callActions;

                                                        return _regenerator2.default.wrap(function _callee4$(_context4) {
                                                            while (1) {
                                                                switch (_context4.prev = _context4.next) {
                                                                    case 0:
                                                                        len = data.length;
                                                                        _i = 0;

                                                                    case 2:
                                                                        if (!(_i < len)) {
                                                                            _context4.next = 12;
                                                                            break;
                                                                        }

                                                                        _context4.next = 5;
                                                                        return _actions5.Actions.findOne({ id: data[_i].id });

                                                                    case 5:
                                                                        _actions = _context4.sent;
                                                                        _context4.next = 8;
                                                                        return createnewActions(_actions5.Actions, _actions, data[_i]);

                                                                    case 8:
                                                                        _callActions = _context4.sent;

                                                                    case 9:
                                                                        _i++;
                                                                        _context4.next = 2;
                                                                        break;

                                                                    case 12:
                                                                        return _context4.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                                                                            t.get("/1/boards/" + board + "/actions/?filter=commentCard&limit=1000", function (err, data) {
                                                                                if (err) reject(err);
                                                                                resolve(data);
                                                                            });
                                                                        }).then(function () {
                                                                            var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(data) {
                                                                                var len, _i2, _actions2, _callActions2;

                                                                                return _regenerator2.default.wrap(function _callee3$(_context3) {
                                                                                    while (1) {
                                                                                        switch (_context3.prev = _context3.next) {
                                                                                            case 0:
                                                                                                len = data.length;
                                                                                                _i2 = 0;

                                                                                            case 2:
                                                                                                if (!(_i2 < len)) {
                                                                                                    _context3.next = 12;
                                                                                                    break;
                                                                                                }

                                                                                                _context3.next = 5;
                                                                                                return _actions5.Actions.findOne({ id: data[_i2].id });

                                                                                            case 5:
                                                                                                _actions2 = _context3.sent;
                                                                                                _context3.next = 8;
                                                                                                return createnewActions(_actions5.Actions, _actions2, data[_i2]);

                                                                                            case 8:
                                                                                                _callActions2 = _context3.sent;

                                                                                            case 9:
                                                                                                _i2++;
                                                                                                _context3.next = 2;
                                                                                                break;

                                                                                            case 12:
                                                                                                return _context3.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                                                                                                    t.get("/1/boards/" + board + "/actions/?filter=moveCardToBoard&limit=1000", function (err, data) {
                                                                                                        if (err) reject(err);
                                                                                                        resolve(data);
                                                                                                    });
                                                                                                }).then(function () {
                                                                                                    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(data) {
                                                                                                        var len, _i3, _actions3, _callActions3;

                                                                                                        return _regenerator2.default.wrap(function _callee2$(_context2) {
                                                                                                            while (1) {
                                                                                                                switch (_context2.prev = _context2.next) {
                                                                                                                    case 0:
                                                                                                                        len = data.length;
                                                                                                                        _i3 = 0;

                                                                                                                    case 2:
                                                                                                                        if (!(_i3 < len)) {
                                                                                                                            _context2.next = 12;
                                                                                                                            break;
                                                                                                                        }

                                                                                                                        _context2.next = 5;
                                                                                                                        return _actions5.Actions.findOne({ id: data[_i3].id });

                                                                                                                    case 5:
                                                                                                                        _actions3 = _context2.sent;
                                                                                                                        _context2.next = 8;
                                                                                                                        return createnewActions(_actions5.Actions, _actions3, data[_i3]);

                                                                                                                    case 8:
                                                                                                                        _callActions3 = _context2.sent;

                                                                                                                    case 9:
                                                                                                                        _i3++;
                                                                                                                        _context2.next = 2;
                                                                                                                        break;

                                                                                                                    case 12:
                                                                                                                        return _context2.abrupt('return', new _bluebird2.default(function (resolve, reject) {
                                                                                                                            t.get("/1/boards/" + board + "/actions/?filter=createCard&limit=1000", function (err, data) {
                                                                                                                                if (err) reject(err);
                                                                                                                                resolve(data);
                                                                                                                            });
                                                                                                                        }).then(function () {
                                                                                                                            var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
                                                                                                                                var len, _i4, _actions4, _callActions4;

                                                                                                                                return _regenerator2.default.wrap(function _callee$(_context) {
                                                                                                                                    while (1) {
                                                                                                                                        switch (_context.prev = _context.next) {
                                                                                                                                            case 0:
                                                                                                                                                len = data.length;
                                                                                                                                                _i4 = 0;

                                                                                                                                            case 2:
                                                                                                                                                if (!(_i4 < len)) {
                                                                                                                                                    _context.next = 12;
                                                                                                                                                    break;
                                                                                                                                                }

                                                                                                                                                _context.next = 5;
                                                                                                                                                return _actions5.Actions.findOne({ id: data[_i4].id });

                                                                                                                                            case 5:
                                                                                                                                                _actions4 = _context.sent;
                                                                                                                                                _context.next = 8;
                                                                                                                                                return createnewActions(_actions5.Actions, _actions4, data[_i4]);

                                                                                                                                            case 8:
                                                                                                                                                _callActions4 = _context.sent;

                                                                                                                                            case 9:
                                                                                                                                                _i4++;
                                                                                                                                                _context.next = 2;
                                                                                                                                                break;

                                                                                                                                            case 12:
                                                                                                                                                console.log(data[len - 1].date);
                                                                                                                                                return _context.abrupt('return', data[len - 1].date);

                                                                                                                                            case 14:
                                                                                                                                            case 'end':
                                                                                                                                                return _context.stop();
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }, _callee, undefined);
                                                                                                                            }));

                                                                                                                            return function (_x8) {
                                                                                                                                return _ref6.apply(this, arguments);
                                                                                                                            };
                                                                                                                        }()));

                                                                                                                    case 13:
                                                                                                                    case 'end':
                                                                                                                        return _context2.stop();
                                                                                                                }
                                                                                                            }
                                                                                                        }, _callee2, undefined);
                                                                                                    }));

                                                                                                    return function (_x7) {
                                                                                                        return _ref5.apply(this, arguments);
                                                                                                    };
                                                                                                }()));

                                                                                            case 13:
                                                                                            case 'end':
                                                                                                return _context3.stop();
                                                                                        }
                                                                                    }
                                                                                }, _callee3, undefined);
                                                                            }));

                                                                            return function (_x6) {
                                                                                return _ref4.apply(this, arguments);
                                                                            };
                                                                        }()));

                                                                    case 13:
                                                                    case 'end':
                                                                        return _context4.stop();
                                                                }
                                                            }
                                                        }, _callee4, undefined);
                                                    }));

                                                    return function (_x5) {
                                                        return _ref3.apply(this, arguments);
                                                    };
                                                }()));

                                            case 13:
                                            case 'end':
                                                return _context5.stop();
                                        }
                                    }
                                }, _callee5, undefined);
                            }));

                            return function (_x4) {
                                return _ref2.apply(this, arguments);
                            };
                        }()));

                    case 2:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, undefined);
    }));

    return function checkCreateActions(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();
var createnewActions = exports.createnewActions = function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(Actions, actions, data) {
        var d, ymd, newactions, _d, _ymd, _newactions;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        if (actions) {
                            _context7.next = 11;
                            break;
                        }

                        d = new Date(data.date);
                        _context7.next = 4;
                        return (0, _convertDates.convertDates)(d);

                    case 4:
                        ymd = _context7.sent;
                        _context7.next = 7;
                        return Actions.create({
                            id: data.id,
                            idMemberCreator: data.idMemberCreator,
                            data: data.data,
                            type: data.type,
                            date: data.date,
                            dateString: ymd
                        });

                    case 7:
                        newactions = _context7.sent;
                        return _context7.abrupt('return', newactions);

                    case 11:
                        if (!(actions.idMemberCreator != data.idMemberCreator || (0, _stringify2.default)(actions.data) != (0, _stringify2.default)(data.data) || actions.type != data.type || actions.date != data.date)) {
                            _context7.next = 22;
                            break;
                        }

                        _d = new Date(data.date);
                        _context7.next = 15;
                        return (0, _convertDates.convertDates)(_d);

                    case 15:
                        _ymd = _context7.sent;
                        _context7.next = 18;
                        return Actions.update({ id: data.id }, { $set: {
                                idMemberCreator: data.idMemberCreator,
                                data: data.data,
                                type: data.type,
                                date: data.date,
                                dateString: _ymd
                            } });

                    case 18:
                        _newactions = _context7.sent;
                        return _context7.abrupt('return', _newactions);

                    case 22:
                        return _context7.abrupt('return', false);

                    case 23:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, undefined);
    }));

    return function createnewActions(_x9, _x10, _x11) {
        return _ref7.apply(this, arguments);
    };
}();
//# sourceMappingURL=actions.js.map