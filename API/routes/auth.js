const {Router} = require('express');
const addAuth = require('../controllers/auth');
const {register, login, logout} = require('../controllers/auth');

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

// authRouter.get('/test', addAuth);

module.exports = authRouter;