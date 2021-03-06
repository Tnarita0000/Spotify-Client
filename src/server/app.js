const path         = require('path');
const express      = require('express');
const request      = require('request');
const querystring  = require('querystring');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const client_id     = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri  = process.env.REDIRECT_URI;

let stateKey = 'spotify_auth_state';
const app = express();
app.use(express.static(__dirname + '/public')).use(cookieParser());

const generateRandomString = function(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

const rootPath = path.join(__dirname + '/public/html');

app.get('/', (req, res) => {
  res.sendFile(rootPath + '/home.html');
});

app.get('/dashboard', (req, res) => {
  res.sendFile(rootPath + '/dashboard.html');
});

app.get('/login', function(req, res) {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = [
    'user-read-private', 'user-read-currently-playing',
    'user-read-playback-state', 'user-read-recently-played',
    'user-read-email', 'playlist-read-private'
  ].join(" ");
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code', client_id: client_id, scope: scope,
      redirect_uri: redirect_uri, state: state
    }));
});

app.get('/callback', function(req, res) {
  const code        = req.query.code || null;
  const state       = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' + querystring.stringify({
      error: 'state_mismatch'
    }));
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code, redirect_uri: redirect_uri, grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        const access_token = body.access_token,
            refresh_token = body.refresh_token;

        const options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        request.get(options, function(error, response, body) {
          console.log(body);
        });

        res.redirect('/dashboard#' + querystring.stringify({
          access_token: access_token, refresh_token: refresh_token
        }));
      } else {
        res.redirect('/#' + querystring.stringify({
          error: 'invalid_token'
        }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token', refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

console.log('Listening on 3000');
app.listen(3000);
