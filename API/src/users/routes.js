const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.get('/test', controller.testUserRoutes);

module.exports = router;