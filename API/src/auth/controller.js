const pool = require('../../db');
const queries = require('./queries');
const bcrypt = require('bcryptjs');

const register = (req, res) => {
    // Check if username or email exists
    const q = queries.checkUserExists;
    const {username, email, pw} = req.body;

    pool.query(q, [username, email], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json('User data already exists');

        // Hash the password & create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.pw, salt);

        const q = queries.addUser;

        pool.query(q, [username, email, hash], (err, data) => {
            console.log(username, email, hash);
            if (err) return res.json(err);
            return res.status(200).json('User has been added');
        });
    });
};

const login = (req, res) => {

};

const logout = (req, res) => {

};

const testAuthRoutes = (req, res) => {
    res.json('Auth Routes are okay');
};

module.exports = {
    register,
    login,
    logout,
    testAuthRoutes
};