const knex = require("../../configs/index.js");

module.exports = {
  getrating: () => {
    return knex("userstats").select().orderBy("pts", "desc").limit(3);
  },
};
