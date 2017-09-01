'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dashboards = require('dashboards');

var _dashboards2 = _interopRequireDefault(_dashboards);

var _dashboards3 = require('../controller/dashboards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../models', function () {});


var mockDashboards = new _dashboards2.default();

test('new dashboards', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var send, receive, callRec;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    send = {
                        name: "a",
                        idBoard: "1",
                        listComp: ["a1", "b1"],
                        colorComp: "red",
                        listInpr: ["c1"],
                        colorInpr: "blue",
                        listBack: ["d1"],
                        colorBack: "gray",
                        idMember: "x123"
                    };
                    _context.next = 3;
                    return (0, _dashboards3.createnewDashboards)(mockDashboards, send);

                case 3:
                    receive = _context.sent;
                    callRec = mockDashboards.getCreate();

                    expect(callRec.length).toEqual(1);

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
})));
//# sourceMappingURL=dashboards.test.js.map