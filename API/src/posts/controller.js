const pool = require('../../db');
const queries = require('./queries');

const getPosts =(req, res) => {
    pool.query(queries.getPosts, (err, data) => {
        if (err) return res.status(400).send('Bad request');
        res.status(200).json(data.rows);
    });
};

const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    // Check to see if post exists
    pool.query(queries.getPostById, [id], (err, data) => {
        if (!data.rows.length) return res.status(404).send('Post not found');
        if (err) return res.status(400).send('Bad Request');
        res.status(200).json(data.rows);
    });
};

const addPost = (req, res) => {
    const {title, descr, content, img, userid} = req.body;
    // Add post to database
    pool.query(
        queries.addPost,
        [title, descr, content, img, userid],
        (err, data) => {
            if (err) {
                return res.status(400).send('Bad request');
            };
            res.status(201).send('Post successfully added');
        }
    );
};

const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    // Extract data from request
    const {title, descr, content, img} = req.body;
    // Check to see if post exists
    pool.query(queries.getPostById, [id], (err, data) => {
        if (!data.rows.length) return res.status(404).send('Post not found');
        pool.query(queries.updatePost, [title, descr, content, img, id], (err, data) => {
            console.log([title, descr, content, img, id]);
            if (err) return res.status(400).send('Bad request');
            return res.status(201).send('Post updated');
        });
    });
};

const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    // Check to see if post exists
    pool.query(queries.getPostById, [id], (err, data) => {
        if (!data.rows.length) {
            return res.status(400).send('Post not found');
        };
        // Delete the post
        pool.query(queries.deletePost, [id], (err, data) => {
            if (err) return res.status(404).send('Bad request');
            res.status(200).send('Post has been deleted');
        });
    });
};

module.exports = {
    getPosts,
    getPostById,
    addPost,
    updatePost,
    deletePost
}