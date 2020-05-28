const express = require('express');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');
const storyRouter = require('../story/storyRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());


server.use('/app/auth', authRouter);
server.use('/app/users', usersRouter);
server.use('/app/story', storyRouter)

server.get('/', async (req, res) => {
    try {
      
      const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
      res.status(200).json({ motd: messageOfTheDay}); // change this line
    } catch (error) {
      console.error('\nERROR', error);
      res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
    }
  });

module.exports = server;