const { json } = require("express");
const { Router } = require("express");
const { auth } = require("../controllers/authcontroller");

const router = Router();
router.get("/", async (req, res) => {
  if (req.body.login == null || req.body.password == null) {
    res.sendStatus(400);
  } else {
    const ret = await auth(req.body.login, req.body.password);
    res.json(ret);
  }
});
module.exports = router;
