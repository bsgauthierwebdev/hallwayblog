const {Router} = require('express');
const addUser = require('../controllers/user');

const userRouter = Router();

userRouter.get('/test', addUser);

module.exports = userRouter;