const getPosts = 'SELECT * FROM posts';

const getPostById = 'SELECT * FROM posts WHERE id = $1';

module.exports = {
    getPosts,
    getPostById
};