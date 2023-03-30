const pool = require('../db');
const bcrypt = require('bcryptjs');

const register = (req, res) => {
    // CHECK IF EMAIL OR USERNAME EXISTS
    const {username, email, pw} = req.body;
    const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
    
    pool.query(q, [email, username], (err, results) => {
        if (err) return res.json(err);
        if (results.length) return res.status(409).json(`User data already exists`);

        // HASH PASSWORD AND CREATE USER
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pw, salt);

        const q = 'INSERT INTO users (`username`, `email`, `pw`) VALUES (?)';
        const values = [
            username,
            email,
            hash
        ]

        pool.query(q, [values], (err, results) => {
            if (err) return res.json(err);
            return res.status(200).json('User has been added');
        });
    });
};

const login = (req, res) => {

};

const logout = (req, res) => {

};

const addAuth = (req, res) => {
    res.json('from auth controller');
};

module.exports = {
    addAuth,
    register,
    login,
    logout
};