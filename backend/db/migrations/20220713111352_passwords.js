/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Users", function (table) {
    table.increments("userid").primary();
    table.string("userlogin", 40).unique().notNullable();
    table.string("userpassword", 40).notNullable();
    table.boolean("isadmin").notNullable();
    table.boolean("isbanned").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
