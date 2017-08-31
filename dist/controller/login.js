'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.callback = exports.loginAuthen = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _members = require('./members');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OAuth = require('oauth').OAuth;


var requestURL = "https://trello.com/1/OAuthGetRequestToken";
var accessURL = "https://trello.com/1/OAuthGetAccessToken";
var authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
var sendURL = "http://localhost:5000/gettoken";
var beginURL = "http://localhost:5000";
var appName = "CFDrello Dashboard";

var key = "662fa775f48bd56cea11e8be634da284";
var secret = "8e3dd310f5a5a5e8757563ecc30d992664d895abc296441bfc1cf515ffdefa51";

var loginCallback = "http://localhost:4444/callback";
var oauth_secrets = {};

var oauth = new OAuth(requestURL, accessURL, key, secret, "1.0A", loginCallback, "HMAC-SHA1");

var loginAuthen = exports.loginAuthen = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('GET \'/login\' \uD83E\uDD20 ' + Date());
                        oauth.getOAuthRequestToken(function (error, token, tokenSecret, results) {
                            // console.log(`in getOAuthRequestToken - token: ${token}, tokenSecret: ${tokenSecret}, resultes ${JSON.stringify(results)}, error: ${JSON.stringify(error)}`)
                            oauth_secrets[token] = tokenSecret;
                            res.redirect(authorizeURL + '?oauth_token=' + token + '&name=' + appName + '&expiration=never');
                        });

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function loginAuthen(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var callback = exports.callback = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res) {
        var query, token, tokenSecret, verifier;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        query = _url2.default.parse(req.url, true).query;
                        token = query.oauth_token;
                        tokenSecret = oauth_secrets[token];
                        verifier = query.oauth_verifier;

                        oauth.getOAuthAccessToken(token, tokenSecret, verifier, function () {
                            var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(error, accessToken, accessTokenSecret, results) {
                                return _regenerator2.default.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                console.log('in getOAuthAccessToken - accessToken: ' + accessToken + ', accessTokenSecret: ' + accessTokenSecret + ', error: ' + error);
                                                oauth.getProtectedResource("https://api.trello.com/1/members/me", "GET", accessToken, accessTokenSecret, function () {
                                                    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(error, data, respond) {
                                                        var dataJ, sendData, resData;
                                                        return _regenerator2.default.wrap(function _callee2$(_context2) {
                                                            while (1) {
                                                                switch (_context2.prev = _context2.next) {
                                                                    case 0:
                                                                        if (error) res.redirect('' + beginURL);
                                                                        console.log('in getProtectedResource - accessToken: ' + accessToken + ', accessTokenSecret: ' + accessTokenSecret);
                                                                        dataJ = JSON.parse(data);
                                                                        sendData = {
                                                                            app_id: key,
                                                                            token: accessToken,
                                                                            id: dataJ.id,
                                                                            username: dataJ.username,
                                                                            fullName: dataJ.fullName,
                                                                            idBoards: dataJ.idBoards
                                                                        };
                                                                        _context2.next = 6;
                                                                        return (0, _members.havedata)(sendData);

                                                                    case 6:
                                                                        resData = _context2.sent;

                                                                        res.redirect(sendURL + '/' + accessToken + '/' + dataJ.id);

                                                                    case 8:
                                                                    case 'end':
                                                                        return _context2.stop();
                                                                }
                                                            }
                                                        }, _callee2, undefined);
                                                    }));

                                                    return function (_x9, _x10, _x11) {
                                                        return _ref4.apply(this, arguments);
                                                    };
                                                }());

                                            case 2:
                                            case 'end':
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, undefined);
                            }));

                            return function (_x5, _x6, _x7, _x8) {
                                return _ref3.apply(this, arguments);
                            };
                        }());

                    case 5:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function callback(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=login.js.map