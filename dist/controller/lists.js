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

// const Trello = require("node-trello");
// const t = new Trello("0c0448fe0859bc978758a937fea22dc5", "e5038d4cb3e3c43f2d9c5a340cc9728354cd7c7184eaecb02a8bdc38b7f6c96d");
// let idBoards = "583fec9f1b0bf4ea049ecebd"
// t.get("/1/boards/"+idBoards+"/lists",(err, data) =>{
//   if (err) throw err;
//   console.log(data.length);
// });
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
                                                    _context.next = 17;
                                                    break;
                                                }

                                                _context.next = 7;
                                                return _lists.Lists.findOne({ id: data[i].id });

                                            case 7:
                                                lists = _context.sent;

                                                console.log(data[i].id);
                                                console.log(lists);
                                                _context.next = 12;
                                                return createnewLists(lists, data[i]);

                                            case 12:
                                                callcreate = _context.sent;

                                                if (callcreate) console.log("create new lists complete");else console.log("have a lists already!!");

                                            case 14:
                                                i++;
                                                _context.next = 4;
                                                break;

                                            case 17:
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

    return function checkCreateLists(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var createnewLists = exports.createnewLists = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(lists, data) {
        var newlist;
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
                            id: data.id,
                            name: data.name,
                            idBoard: data.idBoard
                        });

                    case 3:
                        newlist = _context3.sent;
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

    return function createnewLists(_x6, _x7) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=lists.js.map