const express = require("express");

const authRouter = require('../auth/auth-router')

const usersRouter = require('../users/users-router.js')
const bodyParser = require('body-parser')

const server = express();

server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(express.json());
server.use('/auth', authRouter)
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use('/users', usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;