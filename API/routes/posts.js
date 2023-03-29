const {Router} = require('express');
const addPost = require('../controllers/post');

const postRouter = Router();

postRouter.get('/test', addPost);

module.exports = postRouter;