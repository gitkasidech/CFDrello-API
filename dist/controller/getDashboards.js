'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findDashboards = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dashboards = require('../models/dashboards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findDashboards = exports.findDashboards = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        var idMember, dashboards;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('GET \'/dashboards/' + req.params.idMember + '\' \uD83E\uDD20 ' + Date());
                        idMember = req.params.idMember;
                        _context.next = 4;
                        return _dashboards.Dashboards.findOne({ idMember: idMember });

                    case 4:
                        dashboards = _context.sent;

                        res.json(dashboards);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function findDashboards(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=getDashboards.js.map