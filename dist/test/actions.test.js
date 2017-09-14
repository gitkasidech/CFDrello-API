'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _actions = require('actions');

var _actions2 = _interopRequireDefault(_actions);

var _actions3 = require('../controller/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../models', function () {});


var mockActions = new _actions2.default();
var actions = {
  id: "123a",
  idMemberCreator: "aa11",
  data: {
    list: {
      name: "Done",
      id: "58dba95aa3fca404ad62476c"
    },
    board: {
      shortLink: "d2EnEWSY",
      name: "Best Test Board!",
      id: "586e8f681d4fe9b06a928307"
    },
    card: {
      shortLink: "HKaaH2Pk",
      idShort: 94,
      name: "Design New System",
      id: "5939a829eba57d109331a289",
      pos: 229375
    },
    old: {
      pos: 163839.5
    }
  },
  type: "updateCard",
  date: "2017-06-08T14:40:27.915Z",
  dateString: "2017-06-08-4"
};

test('new actions', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var send, actionsNew, receive, callRec;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          send = {
            id: "123a",
            idMemberCreator: "aa11",
            data: {
              list: {
                name: "Done",
                id: "58dba95aa3fca404ad62476c"
              },
              board: {
                shortLink: "d2EnEWSY",
                name: "Best Test Board!",
                id: "586e8f681d4fe9b06a928307"
              },
              card: {
                shortLink: "HKaaH2Pk",
                idShort: 94,
                name: "Design New System",
                id: "5939a829eba57d109331a289",
                pos: 229375
              },
              old: {
                pos: 163839.5
              }
            },
            type: "updateCard",
            date: "2017-06-08T14:40:27.915Z",
            dateString: "2017-06-08-4"
          };
          actionsNew = undefined;
          _context.next = 4;
          return (0, _actions3.createnewActions)(mockActions, actionsNew, send);

        case 4:
          receive = _context.sent;
          callRec = mockActions.getCreate();

          expect(callRec.length).toEqual(1);

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

test('update idMemberCreator', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
  var send, receive, callRec;
  return _regenerator2.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          send = {
            id: "123a",
            idMemberCreator: "bb22",
            data: {
              list: {
                name: "Done",
                id: "58dba95aa3fca404ad62476c"
              },
              board: {
                shortLink: "d2EnEWSY",
                name: "Best Test Board!",
                id: "586e8f681d4fe9b06a928307"
              },
              card: {
                shortLink: "HKaaH2Pk",
                idShort: 94,
                name: "Design New System",
                id: "5939a829eba57d109331a289",
                pos: 229375
              },
              old: {
                pos: 163839.5
              }
            },
            type: "updateCard",
            date: "2017-06-08T14:40:27.915Z",
            dateString: "2017-06-08-4"
          };
          _context2.next = 3;
          return (0, _actions3.createnewActions)(mockActions, actions, send);

        case 3:
          receive = _context2.sent;
          callRec = mockActions.getUpdate();

          expect(callRec[0]).toEqual(send);

        case 6:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));

test('update data', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
  var send, receive, callRec;
  return _regenerator2.default.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          send = {
            id: "123a",
            idMemberCreator: "aa11",
            data: {
              listAfter: {
                name: "Done",
                id: "58dba95aa3fca404ad62476c"
              },
              listBefore: {
                name: "Doing",
                id: "58d4144e4ec5c792a898d4b4"
              },
              board: {
                shortLink: "d2EnEWSY",
                name: "Best Test Board!",
                id: "586e8f681d4fe9b06a928307"
              },
              card: {
                shortLink: "HKaaH2Pk",
                idShort: 94,
                name: "Design New System",
                id: "5939a829eba57d109331a289",
                idList: "58dba95aa3fca404ad62476c"
              },
              old: {
                idList: "58d4144e4ec5c792a898d4b4"
              }
            },
            type: "updateCard",
            date: "2017-06-08T14:40:27.915Z",
            dateString: "2017-06-08-4"
          };
          _context3.next = 3;
          return (0, _actions3.createnewActions)(mockActions, actions, send);

        case 3:
          receive = _context3.sent;
          callRec = mockActions.getUpdate();

          expect(callRec[0]).toEqual(send);

        case 6:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
})));

test('update type', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
  var send, receive, callRec;
  return _regenerator2.default.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          send = {
            id: "123a",
            idMemberCreator: "aa11",
            data: {
              list: {
                name: "Done",
                id: "58dba95aa3fca404ad62476c"
              },
              board: {
                shortLink: "d2EnEWSY",
                name: "Best Test Board!",
                id: "586e8f681d4fe9b06a928307"
              },
              card: {
                shortLink: "HKaaH2Pk",
                idShort: 94,
                name: "Design New System",
                id: "5939a829eba57d109331a289",
                pos: 229375
              },
              old: {
                pos: 163839.5
              }
            },
            type: "createCard",
            date: "2017-06-08T14:40:27.915Z",
            dateString: "2017-06-08-4"
          };
          _context4.next = 3;
          return (0, _actions3.createnewActions)(mockActions, actions, send);

        case 3:
          receive = _context4.sent;
          callRec = mockActions.getUpdate();

          expect(callRec[0]).toEqual(send);

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, undefined);
})));

test('update date', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
  var send, receive, callRec;
  return _regenerator2.default.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          send = {
            id: "123a",
            idMemberCreator: "aa11",
            data: {
              list: {
                name: "Done",
                id: "58dba95aa3fca404ad62476c"
              },
              board: {
                shortLink: "d2EnEWSY",
                name: "Best Test Board!",
                id: "586e8f681d4fe9b06a928307"
              },
              card: {
                shortLink: "HKaaH2Pk",
                idShort: 94,
                name: "Design New System",
                id: "5939a829eba57d109331a289",
                pos: 229375
              },
              old: {
                pos: 163839.5
              }
            },
            type: "updateCard",
            date: "2017-06-07T14:40:27.915Z",
            dateString: "2017-06-07-3"
          };
          _context5.next = 3;
          return (0, _actions3.createnewActions)(mockActions, actions, send);

        case 3:
          receive = _context5.sent;
          callRec = mockActions.getUpdate();

          expect(callRec[0]).toEqual(send);

        case 6:
        case 'end':
          return _context5.stop();
      }
    }
  }, _callee5, undefined);
})));

test('update all', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
  var send, receive, callRec;
  return _regenerator2.default.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          send = {
            id: "123a",
            idMemberCreator: "bb22",
            data: {
              listAfter: {
                name: "Done",
                id: "58dba95aa3fca404ad62476c"
              },
              listBefore: {
                name: "Doing",
                id: "58d4144e4ec5c792a898d4b4"
              },
              board: {
                shortLink: "d2EnEWSY",
                name: "Best Test Board!",
                id: "586e8f681d4fe9b06a928307"
              },
              card: {
                shortLink: "HKaaH2Pk",
                idShort: 94,
                name: "Design New System",
                id: "5939a829eba57d109331a289",
                idList: "58dba95aa3fca404ad62476c"
              },
              old: {
                idList: "58d4144e4ec5c792a898d4b4"
              }
            },
            type: "addCard",
            date: "2017-06-07T14:40:27.915Z",
            dateString: "2017-06-07-3"
          };
          _context6.next = 3;
          return (0, _actions3.createnewActions)(mockActions, actions, send);

        case 3:
          receive = _context6.sent;
          callRec = mockActions.getUpdate();

          expect(callRec[0]).toEqual(send);

        case 6:
        case 'end':
          return _context6.stop();
      }
    }
  }, _callee6, undefined);
})));

test('have actions already', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
  var send, rec;
  return _regenerator2.default.wrap(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          send = {
            id: "123a",
            idMemberCreator: "aa11",
            data: {
              list: {
                name: "Done",
                id: "58dba95aa3fca404ad62476c"
              },
              board: {
                shortLink: "d2EnEWSY",
                name: "Best Test Board!",
                id: "586e8f681d4fe9b06a928307"
              },
              card: {
                shortLink: "HKaaH2Pk",
                idShort: 94,
                name: "Design New System",
                id: "5939a829eba57d109331a289",
                pos: 229375
              },
              old: {
                pos: 163839.5
              }
            },
            type: "updateCard",
            date: "2017-06-08T14:40:27.915Z",
            dateString: "2017-06-08-4"
          };
          _context7.next = 3;
          return (0, _actions3.createnewActions)(mockActions, actions, send);

        case 3:
          rec = _context7.sent;

          expect(rec).toBe(false);

        case 5:
        case 'end':
          return _context7.stop();
      }
    }
  }, _callee7, undefined);
})));
//# sourceMappingURL=actions.test.js.map