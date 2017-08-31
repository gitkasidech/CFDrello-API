import http from 'http'
const OAuth = require('oauth').OAuth
import url from 'url'
import { havedata } from './members'

const requestURL = "https://trello.com/1/OAuthGetRequestToken"
const accessURL = "https://trello.com/1/OAuthGetAccessToken"
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken"
const sendURL = "http://localhost:5000/gettoken"
const beginURL = "http://localhost:5000"
const appName = "CFDrello Dashboard"

const key = "662fa775f48bd56cea11e8be634da284"
const secret = "8e3dd310f5a5a5e8757563ecc30d992664d895abc296441bfc1cf515ffdefa51"

const loginCallback = "http://localhost:4444/callback"
const oauth_secrets = {}

const oauth = new OAuth(requestURL, accessURL, key, secret, "1.0A", loginCallback, "HMAC-SHA1")

export const loginAuthen = async (req,res) => {
    console.log(`GET '/login' 🤠 ${Date()}`)
    oauth.getOAuthRequestToken((error, token, tokenSecret, results) => {
        // console.log(`in getOAuthRequestToken - token: ${token}, tokenSecret: ${tokenSecret}, resultes ${JSON.stringify(results)}, error: ${JSON.stringify(error)}`)
        oauth_secrets[token] = tokenSecret
        res.redirect(`${authorizeURL}?oauth_token=${token}&name=${appName}&expiration=never`)
    });
}

export const callback = async (req, res) => {
    const query = url.parse(req.url, true).query
    const token = query.oauth_token
    const tokenSecret = oauth_secrets[token]
    const verifier = query.oauth_verifier
    oauth.getOAuthAccessToken(token, tokenSecret, verifier, async (error, accessToken, accessTokenSecret, results) => {
        console.log(`in getOAuthAccessToken - accessToken: ${accessToken}, accessTokenSecret: ${accessTokenSecret}, error: ${error}`)
        oauth.getProtectedResource("https://api.trello.com/1/members/me", "GET",accessToken, accessTokenSecret, async (error, data, respond) => {
            if(error)
                res.redirect(`${beginURL}`)
            console.log(`in getProtectedResource - accessToken: ${accessToken}, accessTokenSecret: ${accessTokenSecret}`)
            const dataJ = JSON.parse(data);
            const sendData = {
                app_id: key,
                token: accessToken,
                id: dataJ.id,
                username: dataJ.username,
                fullName: dataJ.fullName,
                idBoards: dataJ.idBoards
            }
            const resData = await havedata(sendData)
            res.redirect(`${sendURL}/${accessToken}/${dataJ.id}`)
        })
    })
}