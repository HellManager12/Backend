const { json } = require("express");
const {Router} = require("express");
const {user} = require('../controllers/usercontroller')

const router = Router();
router.get('/',async(req,res)=>{
    const ret = await user(req.body.id)
    res.json(ret)})
module.exports = router;
