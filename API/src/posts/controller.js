const pool = require('../../db')
const queries = require('./queries');

const getPosts = (req, res) => {
    pool.query(queries.getPosts, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data.rows);
    });
};

const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPostById, [id], (err, data) => {
        if (err) return res.status(500).json(err);
        // If post doesn't exist
        if (!data.rows.length) return res.status(409).json('Post does not exist');
        return res.status(200).json(data.rows);
    });
};

// const testPostRoutes = (req, res) => {
//     res.json('Post Routes are okay');
// };

module.exports = {
    getPosts,
    getPostById,
    // testPostRoutes
};