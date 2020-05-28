
exports.up = function(knex) {
    return knex.schema.createTable("story", (table) => {
        table.increments("id").unique()
        table.integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users")
        table.string("title").notNullable()
        table.datetime("date").notNullable()
        table.string("description").notNullable()
  
});

}


exports.down = function(knex) {
    return knex.schema.dropTableIfExists("story")
  
};
