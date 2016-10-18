const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
const options = { promiseLibrary: global.Promise };
mongoose.connect('mongodb://localhost:auth/auth', options);

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log(`Server linstening on ${port}`);