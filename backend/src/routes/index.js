const {Router} = require('express');
const authRouter = require('./auth');

module.exports = () => {
  const router = Router();

  router.use('/auth', authRouter());

  return router;
};