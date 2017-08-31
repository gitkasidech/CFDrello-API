'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkInf = exports.saveLCA = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _labels = require('./labels');

var _cards = require('./cards');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveLCA = exports.saveLCA = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        var inf, callInf, key, callCreate, callCards, callActions;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('POST \'/actioncards\' \uD83E\uDD20 ' + Date());
                        inf = req.body;

                        console.log(inf);
                        _context.next = 5;
                        return checkInf(inf);

                    case 5:
                        callInf = _context.sent;

                        console.log(callInf);

                        if (!callInf) {
                            _context.next = 9;
                            break;
                        }

                        return _context.abrupt('return', res.status(500).send("format should be"));

                    case 9:
                        key = "662fa775f48bd56cea11e8be634da284";
                        _context.next = 12;
                        return (0, _labels.checkCreateLabels)(inf.idBoard, key, inf.token);

                    case 12:
                        callCreate = _context.sent;
                        _context.next = 15;
                        return (0, _cards.checkCreateCards)(inf.idBoard, key, inf.token);

                    case 15:
                        callCards = _context.sent;
                        _context.next = 18;
                        return (0, _actions.checkCreateActions)(inf.idBoard, key, inf.token);

                    case 18:
                        callActions = _context.sent;

                        // return res.json({idDashboard: callCreate._id})
                        res.send("OK");

                    case 20:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function saveLCA(_x, _x2, _x3) {
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
//# sourceMappingURL=createLCA.js.map