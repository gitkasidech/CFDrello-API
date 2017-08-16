'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewLists = exports.checkreq = exports.havedata = exports.setRoute = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lists = require('../models/lists');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setRoute = exports.setRoute = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(app) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        app.post('/lists', havedata);

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
        var callcheckreq, lists, callcreate;
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
                        return _lists.Lists.findOne({ id: req.body.id });

                    case 9:
                        lists = _context2.sent;

                        console.log(lists);

                        _context2.next = 13;
                        return createnewLists(lists, req.body);

                    case 13:
                        callcreate = _context2.sent;

                        if (callcreate) {
                            console.log("create new lists complete");
                            //add to sprint 2 query data
                            res.json({
                                createLists: true,
                                id: req.body.id,
                                name: req.body.name,
                                idBoard: req.body.idBoard
                            });
                        } else {
                            console.log("have lists already!!");
                            //add to sprint 2 query data
                            res.json({
                                createLists: false,
                                id: req.body.id,
                                name: req.body.name,
                                idBoard: req.body.idBoard
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
    if (!body.id || !body.name || !body.idBoard) {
        return true;
    } else {
        return false;
    }
};
var createnewLists = exports.createnewLists = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(lists, body) {
        var newlists;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (lists) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 3;
                        return _lists.Lists.create({
                            id: body.id,
                            name: body.name,
                            idBoard: body.idBoard
                        });

                    case 3:
                        newlists = _context3.sent;
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

    return function createnewLists(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=lists.js.map