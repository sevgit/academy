import { StaticRouter, matchPath } from 'react-router-dom';

import App from './App';
import React from 'react';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import { renderToString } from 'react-dom/server';

mongoose.connect('mongodb://localhost/academyauth');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = mongoose.model('User', new Schema({
  id: ObjectId,
  firstName: String,
  lastName: String,
  email: {type: String, unique:true},
  password: String,
}));

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.use(bodyParser.urlencoded({extended:true}));



server.post('/register', function(req, res) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  user.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
  }
  });
});

server.post('/login', function(req, res) {
  User.findOne({ email: req.body.email}, function(err, user) {
    if (!user) {
      console.log(err);
      res.redirect('/login');
    } else {
      if (req.body.password === user.password) {
        console.log("LOGGED");
        res.redirect('/');
      }
      else {
        console.log("INCORRECT PASSWORD");
        res.redirect('/login');
      }
    }
  })
});

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
        <script src="${assets.client.js}" defer></script>
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });


export default server;
