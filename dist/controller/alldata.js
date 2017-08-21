'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.allData = exports.loginAuthen = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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
var appName = "CFDrello Dashboard";

var key = "662fa775f48bd56cea11e8be634da284";
var secret = "8e3dd310f5a5a5e8757563ecc30d992664d895abc296441bfc1cf515ffdefa51";

var loginCallback = "http://localhost:3000/callback";
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
                            console.log('in getOAuthRequestToken - token: ' + token + ', tokenSecret: ' + tokenSecret + ', resultes ' + (0, _stringify2.default)(results) + ', error: ' + (0, _stringify2.default)(error));
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

var allData = exports.allData = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
        var query, token, tokenSecret, verifier;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        query = _url2.default.parse(req.url, true).query;
                        token = query.oauth_token;
                        tokenSecret = oauth_secrets[token];
                        verifier = query.oauth_verifier;

                        oauth.getOAuthAccessToken(token, tokenSecret, verifier, function (error, accessToken, accessTokenSecret, results) {
                            console.log('in getOAuthAccessToken - accessToken: ' + accessToken + ', accessTokenSecret: ' + accessTokenSecret + ', error: ' + error);
                            oauth.getProtectedResource("https://api.trello.com/1/members/me", "GET", accessToken, accessTokenSecret, function (error, data, respond) {
                                console.log('in getProtectedResource - accessToken: ' + accessToken + ', accessTokenSecret: ' + accessTokenSecret);
                                var dataJ = JSON.parse(data);
                                dataJ.token = accessToken;
                                res.json(dataJ);
                            });
                        });

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function allData(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=alldata.js.map