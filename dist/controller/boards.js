'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewBoards = exports.checkreq = exports.havedata = exports.setRoute = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _boards = require('../models/boards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setRoute = exports.setRoute = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(app) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        app.post('/boards', havedata);

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function setRoute(_x) {
        return _ref.apply(this, arguments);
    };
}();
var havedata = exports.havedata = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
        var callcheckreq, boards, callcreate;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log(req.body);
                        _context2.next = 3;
                        return checkreq(req.body);

                    case 3:
                        callcheckreq = _context2.sent;

                        console.log(callcheckreq);

                        if (!callcheckreq) {
                            _context2.next = 7;
                            break;
                        }

                        return _context2.abrupt('return', res.status(500).send("format should be"));

                    case 7:
                        _context2.next = 9;
                        return _boards.Boards.findOne({ id: req.body.id });

                    case 9:
                        boards = _context2.sent;

                        console.log(boards);

                        _context2.next = 13;
                        return createnewBoards(boards, req.body);

                    case 13:
                        callcreate = _context2.sent;

                        if (callcreate) {
                            console.log("create new boards complete");
                            //add to sprint 2 query data
                            res.json({
                                createBoards: true,
                                id: req.body.id,
                                name: req.body.name,
                                labelNames: req.body.labelNames
                            });
                        } else {
                            console.log("have boards already!!");
                            //add to sprint 2 query data
                            res.json({
                                createBoards: false,
                                id: req.body.id,
                                name: req.body.name,
                                labelNames: req.body.labelNames
                            });
                        }

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function havedata(_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
var checkreq = exports.checkreq = function checkreq(body) {
    if (!body.id || !body.name) {
        return true;
    } else {
        return false;
    }
};
var createnewBoards = exports.createnewBoards = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(boards, body) {
        var newboards;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (boards) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 3;
                        return _boards.Boards.create({
                            id: body.id,
                            name: body.name,
                            labelNames: body.labelNames
                        });

                    case 3:
                        newboards = _context3.sent;
                        return _context3.abrupt('return', true);

                    case 7:
                        return _context3.abrupt('return', false);

                    case 8:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewBoards(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=boards.js.map