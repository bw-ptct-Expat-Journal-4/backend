const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    addUser,
    findBy,
    getUsers,

}

function addUser(credentials){
    return db('users')
    .insert(credentials)
    
}

function findBy(filter){
    return db('users')
    .where(filter).first()
}

function getUsers(){
    return db('users')
}