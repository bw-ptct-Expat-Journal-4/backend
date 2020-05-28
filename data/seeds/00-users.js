
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'amy', email: 'amy@google.com', password: 'test1'},
        {username: 'jeff', email: 'jeff@google.com', password: 'test1'},
        {username: 'john', email: 'john@google.com', password: 'test1'},
      ])
})
}
