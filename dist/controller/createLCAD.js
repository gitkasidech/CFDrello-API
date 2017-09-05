'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkInf = exports.saveLCAD = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _labels = require('./labels');

var _cards = require('./cards');

var _actions = require('./actions');

var _getDateActionCards = require('./getDateActionCards');

var _dateActionCards = require('./dateActionCards');

var _convertDates = require('./convertDates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveLCAD = exports.saveLCAD = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        var inf, callInf, key, promises, _ref2, _ref3, callLabels, callCards, callActions, postDateActionCards;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('POST \'/createlcad\' \uD83E\uDD20 ' + Date());
                        inf = req.body;
                        _context.next = 4;
                        return checkInf(inf);

                    case 4:
                        callInf = _context.sent;

                        if (!callInf) {
                            _context.next = 7;
                            break;
                        }

                        return _context.abrupt('return', res.status(500).send("format should be"));

                    case 7:
                        key = "662fa775f48bd56cea11e8be634da284";
                        promises = [(0, _labels.checkCreateLabels)(inf.idBoard, key, inf.token), (0, _cards.checkCreateCards)(inf.idBoard, key, inf.token), (0, _actions.checkCreateActions)(inf.idBoard, key, inf.token)];
                        _context.next = 11;
                        return _promise2.default.all(promises);

                    case 11:
                        _ref2 = _context.sent;
                        _ref3 = (0, _slicedToArray3.default)(_ref2, 3);
                        callLabels = _ref3[0];
                        callCards = _ref3[1];
                        callActions = _ref3[2];
                        _context.next = 18;
                        return (0, _dateActionCards.createDateActionCards)(callActions, inf);

                    case 18:
                        postDateActionCards = _context.sent;


                        // let d = new Date()
                        // d.setDate(d.getDate() - 1)
                        // const endDate = convertDates(d)
                        // console.log(endDate)
                        // let day = d.getDay()
                        // d.setDate(d.getDate() - day)
                        // const startDate = convertDates(d)
                        // const data = {
                        //     idDashboard: inf._id,
                        //     start: startDate,
                        //     end: endDate
                        // }
                        // const getActionCards = await countData(data)
                        // res.json(getActionCards)
                        res.send("OK");

                    case 20:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function saveLCAD(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var checkInf = exports.checkInf = function checkInf(inf) {
    if (!inf.name || !inf.idBoard || !inf.listComp || !inf.colorComp || !inf.listInpr || !inf.colorInpr || !inf.listBack || !inf.colorBack || !inf.idMember || !inf.token) {
        return true;
    } else {
        return false;
    }
};
//# sourceMappingURL=createLCAD.js.map