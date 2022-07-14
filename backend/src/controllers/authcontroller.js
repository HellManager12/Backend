const {authuser} = require('../DB/authdb.js');

const auth =async(login,password)=>{
    const call = await authuser(login);
    const authdata = new Map();
    if (call.length==0){
        authdata.set('userid','0')
    }
    else{
        authdata.set('userid', call[0].userid)
        authdata.set('userlogin',call[0].userlogin)
        authdata.set('admin',call[0].isadmin)
        authdata.set('banned',call[0].isbanned)
    }
    const obj = Object.fromEntries(authdata);
    return obj;
}

module.exports = {
    auth :async(login,password)=>{
        const call = await authuser(login);
        const authdata = new Map();
        if (call.length==0){
            authdata.set('userid',0)
        }
        else if(password == call[0].userpassword){
            authdata.set('userid', call[0].userid)
            authdata.set('userlogin',call[0].userlogin)
            authdata.set('admin',call[0].isadmin)
            authdata.set('banned',call[0].isbanned)
        }
        else{
            authdata.set('userid',0)
        }
        const obj = Object.fromEntries(authdata);
        return obj;}
};
