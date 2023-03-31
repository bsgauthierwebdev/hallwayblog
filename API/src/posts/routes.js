const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getPosts);
router.post('/', controller.addPost);
router.get('/:id', controller.getPostById);
// router.put('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);

module.exports = router;