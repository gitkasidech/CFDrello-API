'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewLabels = exports.checkCreateLabels = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodeTrello = require('node-trello');

var _nodeTrello2 = _interopRequireDefault(_nodeTrello);

var _labels = require('../models/labels');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkCreateLabels = exports.checkCreateLabels = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(board, key, token) {
        var t;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        t = new _nodeTrello2.default(key, token);

                        t.get("/1/boards/" + board + "/labels", function () {
                            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(err, data) {
                                var len, i, labels, callLabels;
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
                                                return _labels.Labels.findOne({ id: data[i].id });

                                            case 7:
                                                labels = _context.sent;
                                                _context.next = 10;
                                                return createnewLabels(_labels.Labels, labels, data[i]);

                                            case 10:
                                                callLabels = _context.sent;

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
                        // if (callLabels) 
                        //     console.log("create or update new label complete")
                        // else 
                        //     console.log("have a label already!!")
                        );

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function checkCreateLabels(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var createnewLabels = exports.createnewLabels = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(Labels, labels, data) {
        var newlabels, _newlabels;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (labels) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 3;
                        return Labels.create({
                            id: data.id,
                            name: data.name,
                            color: data.color,
                            uses: data.uses,
                            idBoard: data.idBoard
                        });

                    case 3:
                        newlabels = _context3.sent;
                        return _context3.abrupt('return', newlabels);

                    case 7:
                        if (!(labels.name != data.name || labels.color != data.color || labels.uses != data.uses)) {
                            _context3.next = 14;
                            break;
                        }

                        _context3.next = 10;
                        return Labels.update({ id: data.id }, { $set: {
                                name: data.name,
                                color: data.color,
                                uses: data.uses
                            } });

                    case 10:
                        _newlabels = _context3.sent;
                        return _context3.abrupt('return', _newlabels);

                    case 14:
                        return _context3.abrupt('return', false);

                    case 15:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewLabels(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=labels.js.map