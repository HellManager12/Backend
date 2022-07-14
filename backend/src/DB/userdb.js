const knex = require("../../configs/index.js");

module.exports = {
  userinfo: (id) => {
    return knex("userstats").select().where("userid", id);
  },
};
