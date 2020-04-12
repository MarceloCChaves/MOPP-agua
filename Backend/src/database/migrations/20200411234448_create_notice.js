
exports.up = function(knex) {
  return knex.schema.createTable('notices', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('phone').notNullable();
    table.string('adress').notNullable();
    table.string('numberAdress').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2 ).notNullable();
    table.string('cep').notNullable();
    table.string('cpf').notNullable();
    table.string('rg').notNullable();
    table.string('establishment').notNullable();
    table.string('dealership').notNullable();

    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('notices');
};