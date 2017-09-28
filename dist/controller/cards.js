'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewCards = exports.checkCreateCards = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodeTrello = require('node-trello');

var _nodeTrello2 = _interopRequireDefault(_nodeTrello);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _cards = require('../models/cards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkCreateCards = exports.checkCreateCards = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(board, key, token) {
        var t;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        t = new _nodeTrello2.default(key, token);

                        t.get("/1/boards/" + board + "/cards/all", function () {
                            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(err, data) {
                                var len, i, cards, callCards;
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
                                                return _cards.Cards.findOne({ id: data[i].id });

                                            case 7:
                                                cards = _context.sent;
                                                _context.next = 10;
                                                return createnewCards(_cards.Cards, cards, data[i]);

                                            case 10:
                                                callCards = _context.sent;

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
                        }());
                        // console.log(sinceDate)
                        // console.log(beforeDate)
                        // return new Promise((resolve, reject) => {
                        //     request({
                        //         uri: 'https://api.trello.com/1/board/'+board+'/cards/?fields=id,name,idBoard,idList,idMembers,idLabels&since='+sinceDate+'&before='+beforeDate+'&limit=1000&key='+key+'&token='+token,
                        //         method: 'GET'
                        //     }, (err, response, body) =>{
                        //         if (err) reject(JSON.stringify(err))
                        //         console.log(body)
                        //         resolve(body)
                        //     })
                        // }).then(async (data) => {
                        //         data = JSON.parse(data)
                        //         const len = data.length
                        //         for (let i = 0; i < len; i++) {
                        //             const cards = await Cards.findOne({ id: (data[i]).id })
                        //             const callCards = await createnewCards(Cards,cards, data[i])
                        //         }
                        // })   

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function checkCreateCards(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var createnewCards = exports.createnewCards = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(Cards, cards, data) {
        var newcards, _newcards;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (cards) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 3;
                        return Cards.create({
                            id: data.id,
                            name: data.name,
                            idBoard: data.idBoard,
                            idList: data.idList,
                            idMembers: data.idMembers,
                            idLabels: data.idLabels
                        });

                    case 3:
                        newcards = _context3.sent;
                        return _context3.abrupt('return', newcards);

                    case 7:
                        if (!(cards.name != data.name || cards.idList != data.idList || (0, _stringify2.default)(cards.idMembers) != (0, _stringify2.default)(data.idMembers) || (0, _stringify2.default)(cards.idLabels) != (0, _stringify2.default)(data.idLabels))) {
                            _context3.next = 14;
                            break;
                        }

                        _context3.next = 10;
                        return Cards.update({ id: data.id }, { $set: {
                                name: data.name,
                                idList: data.idList,
                                idMembers: data.idMembers,
                                idLabels: data.idLabels
                            } });

                    case 10:
                        _newcards = _context3.sent;
                        return _context3.abrupt('return', _newcards);

                    case 14:
                        return _context3.abrupt('return', false);

                    case 15:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewCards(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=cards.js.map