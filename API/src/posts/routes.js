const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/test', controller.testPostRoutes);

module.exports = router;