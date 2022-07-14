const { json } = require("express");
const {Router} = require("express");
const {auth} = require('../controllers/authcontroller')

module.exports = () =>{
    const router = Router();
    router.post(async(req,res)=>{
        console.log(req.body)
        const ret = await auth(req.body.login,req.body.password)
        res.json(ret)
    })
    return router;
};