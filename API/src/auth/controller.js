const pool = require('../../db');
const queries = require('./queries');
const bcrypt = require('bcryptjs');

const register = (req, res) => {
    const {username, email, pw} = req.body;

    // Check if username exists
    pool.query(queries.checkUsername, [username], (err, data) => {
        if (err) return res.json(500).json('Oops');
        if (data.rows.length) return res.status(409).json('Username already in use');

        // Check if email exists
        pool.query(queries.checkEmail, [email], (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.rows.length) return res.status(409).json('Email already in use');
            
            // Hash the password & create user
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.pw, salt);

            pool.query(queries.addUser, [username, email, hash], (err, data) => {
                if (err) return res.status(500).json(err);
                console.log(username);
                res.status(200).json('User has been added');
            });
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