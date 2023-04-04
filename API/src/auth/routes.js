const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.get('/test', controller.testAuthRoutes);

module.exports = router;