'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setRoute = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _login = require('../../controller/login');

var _getBoards = require('../../controller/getBoards');

var _getLists = require('../../controller/getLists');

var _dashboards = require('../../controller/dashboards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setRoute = exports.setRoute = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(app) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        app.get('/login', _login.loginAuthen);
                        app.get('/callback', _login.callback);
                        app.get('/boards/:idMember', _getBoards.findBoards);
                        app.get('/lists/:idBoard', _getLists.findLists);
                        app.post('/dashboards', _dashboards.saveData);

                    case 5:
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
//# sourceMappingURL=router.js.map