'use strict';

var express = require('express');

var http = require('http');
var OAuth = require('oauth').OAuth;
var url = require('url');

/*
/     OAuth Setup and Functions
*/
var requestURL = "https://trello.com/1/OAuthGetRequestToken";
var accessURL = "https://trello.com/1/OAuthGetAccessToken";
var authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
var appName = "Trello OAuth Example";

// Be sure to include your key and secret in 🗝.env ↖️ over there.
// You can get your key and secret from Trello at: https://trello.com/app-key
var key = process.env.TRELLO_KEY;
var secret = process.env.TRELLO_OAUTH_SECRET;

// Trello redirects the user here after authentication
var loginCallback = "https://trello-oauth.glitch.me/callback";

// You should have {"token": "tokenSecret"} pairs in a real application
// Storage should be more permanent (redis would be a good choice)
var oauth_secrets = {};

var oauth = new OAuth(requestURL, accessURL, key, secret, "1.0A", loginCallback, "HMAC-SHA1");

var login = function login(req, res) {
  oauth.getOAuthRequestToken(function (error, token, tokenSecret, results) {
    // console.log(`in getOAuthRequestToken - token: ${token}, tokenSecret: ${tokenSecret}, resultes ${JSON.stringify(results)}, error: ${JSON.stringify(error)}`);
    oauth_secrets[token] = tokenSecret;
    res.redirect(authorizeURL + '?oauth_token=' + token + '&name=' + appName);
  });
};

var callback = function callback(request, response) {
  var query = url.parse(request.url, true).query;
  var token = query.oauth_token;
  var tokenSecret = oauth_secrets[token];
  var verifier = query.oauth_verifier;
  oauth.getOAuthAccessToken(token, tokenSecret, verifier, function (error, accessToken, accessTokenSecret, results) {
    // In a real app, the accessToken and accessTokenSecret should be stored
    console.log('in getOAuthAccessToken - accessToken: ' + accessToken + ', accessTokenSecret: ' + accessTokenSecret + ', error: ' + error);
    oauth.getProtectedResource("https://api.trello.com/1/members/me", "GET", accessToken, accessTokenSecret, function (error, data, response) {
      // Now we can respond with data to show that we have access to your Trello account via OAuth
      console.log('in getProtectedResource - accessToken: ' + accessToken + ', accessTokenSecret: ' + accessTokenSecret);
      response.send(data);
    });
  });
};

/*
/     Routes
*/
app.get("/", function (request, response) {
  console.log('GET \'/\' \uD83E\uDD20 ' + Date());
  response.send("<h1>Oh, hello there!</h1><a href='./login'>Login with OAuth!</a>");
});

app.get("/login", function (request, response) {
  console.log('GET \'/login\' \uD83E\uDD20 ' + Date());
  login(request, response);
});

app.get("/callback", function (request, response) {
  console.log('GET \'/callback\' \uD83E\uDD20 ' + Date());
  callback(request, response);
});
//# sourceMappingURL=test.js.map