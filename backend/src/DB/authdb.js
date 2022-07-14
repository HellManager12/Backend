const knex = require('../../configs/index.js');

module.exports = { authuser:(login)=>{
    return (knex('Users').select().where('userlogin',login))
}
}

