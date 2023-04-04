const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    const q = queries.getUsers;

    pool.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const q = queries.getUserById;

    pool.query(q, [id], (err, data) => {
        if (err) return res.status(500).json(err);
        if (!data.rows.length) return res.status(409).json('User does not exist');
        return res.status(200).json(data.rows);
    });
};

const testUserRoutes = (req, res) => {
    res.json('User Routes are okay');
};

module.exports = {
    getUsers,
    getUserById,
    testUserRoutes
};