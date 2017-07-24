'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createnewUser = exports.checkreq = exports.havedata = exports.setRoute = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _authenuser = require('../models/authenuser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//as rename

var setRoute = exports.setRoute = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(app) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        app.post('/authenuser', havedata);

                    case 1:
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
var havedata = exports.havedata = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
        var callcheckreq, callcreate;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return checkreq(req.body);

                    case 2:
                        callcheckreq = _context2.sent;

                        if (!callcheckreq) {
                            _context2.next = 5;
                            break;
                        }

                        return _context2.abrupt('return', res.status(500).send("format should be"));

                    case 5:
                        _context2.next = 7;
                        return createnewUser(req.body);

                    case 7:
                        callcreate = _context2.sent;

                        if (callcreate) {
                            res.json({ canAccessDashboard: true });
                        } else {
                            res.json({ canAccessDashboard: false });;
                        }

                    case 9:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function havedata(_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
var checkreq = exports.checkreq = function checkreq(body) {
    if (!body.token || !body.id || !body.username) {
        return true;
    } else {
        return false;
    }
};
var createnewUser = exports.createnewUser = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(body) {
        var users, user, newuser;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        users = new _authenuser.AuthenUsers(body);
                        _context3.next = 3;
                        return _authenuser.AuthenUsers.findOne({ idUser: body.id });

                    case 3:
                        user = _context3.sent;

                        if (user) {
                            _context3.next = 12;
                            break;
                        }

                        _context3.next = 7;
                        return _authenuser.AuthenUsers.create({
                            idUser: body.id,
                            username: body.username,
                            fullname: body.fullname,
                            token: body.token
                        });

                    case 7:
                        newuser = _context3.sent;

                        //res.json(users);
                        console.log("add complete");
                        // res.send('<h1>add New dashboard</h1>');
                        return _context3.abrupt('return', true);

                    case 12:
                        console.log("have a user already!!");
                        // res.send('<h1>dashboard</h1>');
                        return _context3.abrupt('return', false);

                    case 14:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function createnewUser(_x5) {
        return _ref3.apply(this, arguments);
    };
}();

// export const authenuserController = async (req, res, next) => {
//         // const json = req.body
//         // const {idUser, username, fullname, token, email} = json;
//         if (!req.body.token||!req.body.idUser||!req.body.username) {
//             res.status(500).send("format should be")
//         }
//         else{
//             const users = new AuthenUser(req.body); 
//             const user = await AuthenUser.findOne({idUser: req.body.idUser});
//             if(!user){
//                 const newuser = await AuthenUser.create({
//                 idUser: req.body.idUser,
//                 username: req.body.username,
//                 fullname: req.body.fullname,
//                 token: req.body.token,
//                 email: req.body.email
//             });
//             //res.json(users);
//             console.log("add complete");
//             res.send('<h1>add New dashboard</h1>');
//             }
//             else{
//                 console.log("have a user already!!");
//                 res.send('<h1>dashboard</h1>');
//             }
//         }

// }
//# sourceMappingURL=authenuser.js.map