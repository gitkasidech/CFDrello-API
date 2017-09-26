'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getActionActivity = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actions = require('../models/actions');

var _convertDates = require('./convertDates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getActionActivity = exports.getActionActivity = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        var idBoard, findActions, i, activity, d, cond2Date, cond3Date, cond3_1Date, cond3_2Date, cond4Date, hour, minute, now, timeago, dayAction, hourAction, minuteAction, dayCond, calTime;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('GET \'/getactionactivity/' + req.params.idBoard + '\' \uD83E\uDD20 ' + Date());

                        idBoard = req.params.idBoard;
                        _context.next = 4;
                        return _actions.Actions.find({ "data.board.id": idBoard }).sort({ date: -1 });

                    case 4:
                        findActions = _context.sent;
                        //now to ago
                        i = 0;
                        activity = [];
                        d = new Date();
                        cond2Date = new Date();
                        cond3Date = new Date();
                        cond3_1Date = new Date();
                        cond3_2Date = new Date();
                        cond4Date = new Date();
                        hour = d.getHours();
                        minute = d.getMinutes();
                        now = (0, _convertDates.convertDates)(d);

                        d.setDate(d.getDate() - 90);
                        cond2Date.setDate(cond2Date.getDate() - 7);
                        cond3Date.setDate(cond3Date.getDate() - 30);
                        cond3_1Date.setDate(cond3Date.getDate() - 14);
                        cond3_2Date.setDate(cond3Date.getDate() - 21);
                        cond4Date.setDate(cond4Date.getDate() - 60);
                        timeago = void 0;

                        while (findActions[i].date >= d) {
                            dayAction = findActions[i].date.getDay();
                            hourAction = findActions[i].date.getHours();
                            minuteAction = findActions[i].date.getMinutes();
                            dayCond = cond2Date.getDay();


                            if (findActions[i].dateString == now) {
                                calTime = hour * 60 + minute - (hourAction * 60 + minuteAction);

                                if (calTime >= 60) timeago = Math.floor(calTime / 60) + " hour ago";else timeago = calTime + " minute ago";
                            } else if (cond2Date < findActions[i].date) {
                                if (cond2Date.getDate() == findActions[i].date.getDate()) timeago = "6 day ago";else if (dayAction < dayCond) timeago = dayCond - dayAction + " day ago";else timeago = 7 - dayAction + dayCond + " day ago";
                            } else if (cond3Date < findActions[i].date) {
                                if (cond3_1Date < findActions[i].date) timeago = "1 week ago";else if (cond3_2Date < findActions[i].date) timeago = "2 week ago";else timeago = "3 week ago";
                            } else {
                                if (cond4Date < findActions[i].date) timeago = "1 month ago";else timeago = "2 month ago";
                            }
                            //toObject make use object from query mongo
                            activity.push(findActions[i].toObject());
                            activity[i].timeago = timeago;
                            i++;
                        }
                        res.json(activity);

                    case 25:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getActionActivity(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=getActionActivity.js.map