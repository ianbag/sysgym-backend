const express = require('express');
const User = require('../models/user/user.model')
const HttpStatusCode = require('http-status-codes')
const route = express.Router();

route.post('/login', (req, res, next) => {
    console.log(req.body);
    res.sendStatus(HttpStatusCode.CREATED);
});
