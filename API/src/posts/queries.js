const getPosts = 'SELECT * FROM posts ORDER BY id ASC';
const getPostById = 'SELECT * FROM posts WHERE id = $1';
const addPost = 'INSERT INTO posts (title, descr, content, img, userid) VALUES ($1, $2, $3, $4, $5)';
const updatePost = 'UPDATE posts SET title = $1, descr = $2, content = $3, img = $4 where id = $5';
const deletePost = 'DELETE FROM posts WHERE id = $1';

module.exports = {
    getPosts,
    getPostById,
    addPost,
    updatePost,
    deletePost
}