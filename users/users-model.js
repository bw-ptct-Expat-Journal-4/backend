const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    add,
    getUsers,
    findUserById,
    updateUser,
    removeUser,
    

}

function add(user) {
    const [id] = db("users").insert(user, "id");
    return findById(id);
}  


function getUsers() {
    return db.select("*").from('users')
}

function findUserById(user_id) {
    return db('users')
    .where({user_id})
    .first()
}

function updateUser(changes, user_id){
    return db('users')
    .where({user_id})
    .update(changes)
    .then(count=> {
        if (count > 0) {
            return findUserById(user_id)
        } else {
            return null;
        }
    })
}

function removeUser (user_id) {
    return db('users')
    .where('user_id', user_id)
    .del()
    
}

