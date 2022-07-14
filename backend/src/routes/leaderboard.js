const {Router} = require("express");
const {rate} = require('../controllers/ratingcontroller')

const router = Router();
router.get('/',async(req,res)=>{
    const ret = await rate()
    res.json(ret)})
module.exports = router;