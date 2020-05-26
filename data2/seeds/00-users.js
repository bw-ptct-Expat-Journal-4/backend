
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, username: 'kingeli', email:'eli@lambda.com', password:'test1'},
        {user_id: 2, username: 'leeman', email:'lee@lambda.com', password:'test1'},
        {user_id: 3, username: 'paul', email:'paul@lambda.com', password:'test1'}
      ]);
    });
};
