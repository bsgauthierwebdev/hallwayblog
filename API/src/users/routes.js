const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getUsers);
router.post('/', controller.addUser);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUsername);
// router.put('/:id', controller.updateEmail);
// router.put('/:id', controller.updatePassword);
// router.put('/:id', controller.updateImage);
router.delete('/:id', controller.deleteUser);

module.exports = router;