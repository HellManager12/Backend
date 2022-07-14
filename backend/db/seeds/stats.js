/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("userstats").del();
  await knex("userstats").insert([
    { userid: 1, wins: 10, loses: 0, pts: 300 },
    { userid: 2, wins: 2, loses: 2, pts: 0 },
    { userid: 3, wins: 3, loses: 1, pts: 60 },
    { userid: 4, wins: 5, loses: 0, pts: 150 },
  ]);
};
