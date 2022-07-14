const { Router } = require("express");
const authRouter = require("./auth");
const raterouter = require("./leaderboard");
const userprof = require("./profile");

const router = Router();

router.use("/auth", authRouter);
router.use("/leaderboard", raterouter);
router.use("/profile", userprof);

module.exports = router;
