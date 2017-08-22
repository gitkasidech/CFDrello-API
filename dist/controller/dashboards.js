"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewDashboards = exports.checkInf = exports.saveData = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dashboards = require("../models/dashboards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//as rename

var saveData = exports.saveData = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        var inf, callInf, callCreate;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log("POST '/dashboards' \uD83E\uDD20 " + Date());
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

                        return _context.abrupt("return", res.status(500).send("format should be"));

                    case 9:
                        _context.next = 11;
                        return createnewDashboards(_dashboards.Dashboards, inf);

                    case 11:
                        callCreate = _context.sent;

                        console.log("create new dashboards complete");
                        console.log(callCreate);
                        res.json({ idDashboard: callCreate._id });

                    case 15:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function saveData(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var checkInf = exports.checkInf = function checkInf(inf) {
    if (!inf.name || !inf.idBoard || !inf.listComp || !inf.colorComp || !inf.listInpr || !inf.colorInpr || !inf.listBack || !inf.colorBack || !inf.idMember) {
        return true;
    } else {
        return false;
    }
};

var createnewDashboards = exports.createnewDashboards = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(Dashboards, inf) {
        var newDashboards;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return Dashboards.create({
                            name: inf.name,
                            idBoard: inf.idBoard,
                            listComp: inf.listComp,
                            colorComp: inf.colorComp,
                            listInpr: inf.listInpr,
                            colorInpr: inf.colorInpr,
                            listBack: inf.listBack,
                            colorBack: inf.colorBack,
                            idMember: inf.idMember
                        });

                    case 2:
                        newDashboards = _context2.sent;
                        return _context2.abrupt("return", newDashboards);

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function createnewDashboards(_x4, _x5) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=dashboards.js.map