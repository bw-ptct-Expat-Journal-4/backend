  
const express = require('express');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');
const storyRouter = require('../story/storyrouter.js')

const server = express();

server.use(helmet());
server.use(express.json());


server.use('/app/auth', authRouter);
server.use('/app/users', usersRouter);
server.use('/app/story', storyRouter)


server.get('/', (req, res) => {
    res.send("This Is The Server")
})

module.exports = server;