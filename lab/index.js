/**
 * put your server bootstrap code here
 * E.g. require dotenv, configure mongoose, start your server, etc. 
 * Note: keep this separate from app.js for easier testing
 * */
'use strict';

require('dotenv').config();

require('babel-polyfill');
require('babel-register');

const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(process.env.MONGODB_URI, options);

require('./src/app.js').start(process.env.PORT);