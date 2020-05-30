// require('dotenv').config()
//Allows secrets to deploy
const server = require('./api/server.js');

const PORT = process.env.PORT || 4000


server.listen(PORT, () => {
    console.log(`\n*** SERVER RUNNING ON http://localhost:${PORT}***\n`);
})
module.exports = server
