const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    const q = queries.getUsers;

    pool.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data.rows);
    });
};

const testUserRoutes = (req, res) => {
    res.json('User Routes are okay');
};

module.exports = {
    getUsers,
    testUserRoutes
};