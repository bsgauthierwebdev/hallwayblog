const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getPosts);
router.get('/:id', controller.getPostById);
// router.get('/test', controller.testPostRoutes);

module.exports = router;