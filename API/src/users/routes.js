const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getUsers);
router.post('/', controller.addUser);
router.get('/:id', controller.getUserById);
router.put('/:id/update/username', controller.updateUsername);
router.put('/:id/update/email', controller.updateEmail);
router.put('/:id/update/password', controller.updatePassword);
router.put('/:id/update/image', controller.updateImage);
router.delete('/:id', controller.deleteUser);

module.exports = router;