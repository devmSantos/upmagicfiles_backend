require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use(express.urlencoded ({extended: true}));
app.use(morgan('dev'));


app.listen(process.env.PORT || 3000);