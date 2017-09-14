'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewLists = exports.checkCreateLists = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodeTrello = require('node-trello');

var _nodeTrello2 = _interopRequireDefault(_nodeTrello);

var _lists = require('../models/lists');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkCreateLists = exports.checkCreateLists = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(app_id, token, idBoard) {
        var t;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        t = new _nodeTrello2.default(app_id, token);

                        t.get("/1/boards/" + idBoard + "/lists", function () {
                            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(err, data) {
                                var len, i, lists, callcreate;
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
                                                    _context.next = 14;
                                                    break;
                                                }

                                                _context.next = 7;
                                                return _lists.Lists.findOne({ id: data[i].id });

                                            case 7:
                                                lists = _context.sent;
                                                _context.next = 10;
                                                return createnewLists(_lists.Lists, lists, data[i]);

                                            case 10:
                                                callcreate = _context.sent;

                                            case 11:
                                                i++;
                                                _context.next = 4;
                                                break;

                                            case 14:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined);
                            }));

                            return function (_x4, _x5) {
                                return _ref2.apply(this, arguments);
                            };
                        }()
                        // if (callcreate)
                        //     console.log("create or update new lists complete");
                        // else
                        //     console.log("have a lists already!!");
                        );

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function checkCreateLists(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var createnewLists = exports.createnewLists = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(Lists, lists, data) {
        var newlist, _newlist;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (lists) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 3;
                        return Lists.create({
                            id: data.id,
                            name: data.name,
                            idBoard: data.idBoard
                        });

                    case 3:
                        newlist = _context3.sent;
                        return _context3.abrupt('return', newlist);

                    case 7:
                        if (!(lists.name != data.name)) {
                            _context3.next = 14;
                            break;
                        }

                        _context3.next = 10;
                        return Lists.update({ id: data.id }, { $set: {
                                name: data.name
                            } });

                    case 10:
                        _newlist = _context3.sent;
                        return _context3.abrupt('return', _newlist);

                    case 14:
                        return _context3.abrupt('return', false);

                    case 15:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewLists(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=lists.js.map