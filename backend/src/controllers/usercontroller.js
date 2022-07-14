const {userinfo} = require('../DB/userdb.js');

module.exports = {
    user :async(id)=>{
        const call = await userinfo(id);
        return call;}
};
