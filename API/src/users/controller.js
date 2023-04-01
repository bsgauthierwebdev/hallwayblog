const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (err, data) => {
        if (err) return res.status(400).json('Bad request');
        res.status(200).json(data.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (err, data) => {
        if (!data.rows.length) return res.status(404).json('User not found');
        res.status(200).json(data.rows);
    });
};

const addUser = (req, res) => {
    const {username, email, pw, img} = req.body;
    // Check to see if user email exists in database
    pool.query(queries.checkUserExists, [username, email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already in use');
        }
        // Add student to database
        pool.query(
            queries.addUser,
            [username, email, pw, img],
            (error, results) => {
                if (error) throw error;
                res.status(201).send('User created successfully');
            }
        );
    });
};

const updateUsername = (req, res) => {
    const id = parseInt(req.params.id);
    // Extract username from request
    const {username} = req.body;
    console.log([id, username]);
    // Check if user exists
    pool.query(queries.getUserById, [id], (err, data) => {
        if (!data.rows.length) {
            return res.status(404).send('User not found');
        }
        // If user exists, update username
        pool.query(queries.updateUsername, [username, id], (err, data) => {
            if (err) return res.status(400).send('Bad request');
            res.status(200).send(`Username updated to ${username}`);
        });
    });
};

const updateEmail = (req, res) => {
    const id = parseInt(req.params.id);
    // Extract email from request
    const {email} = req.body;
    // Check if user exists
    pool.query(queries.getUserById, [id], (err, data) => {
        if (!data.rows.length) return res.status(404).send('User not found');
        // If user exists, update email
        pool.query(queries.updateEmail, [email, id], (err, data) => {
            if (err) return res.status(400).send('Bad request');
            res.status(200).send(`Email updated to ${email}`);
        });
    });
};

const updatePassword = (req, res) => {
    const id = parseInt(req.params.id);
    // Extract password from request
    const {pw} = req.body;
    // Check if user exists
    pool.query(queries.getUserById, [id], (err, data) => {
        if (!data.rows.length) return res.status(404).send('User not found');
        pool.query(queries.updatePassword, [pw, id], (err, data) => {
            if (err) return res.status(400).send('Bad request');
            res.status(200).send('Password updated');
        });
    });
};

const updateImage = (req, res) => {
    const id = parseInt(req.params.id);
    // Extract image URL from request
    const {img} = req.body;
    // Check if user exists
    pool.query(queries.getUserById, [id], (err, data) => {
        if (!data.rows.length) return res.status(400).send('User not found');
        pool.query(queries.updateImage, [img, id], (err, data) => {
            if (err) return res.status(500).send('Bad request');
            return res.status(200).send(`Image URL updated to ${img}`);
        });
    });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    // Check to see if user exists
    pool.query(queries.getUserById, [id], (err, data) => {
        if (!data.rows.length) {
            return res.status(400).send('User not found');
        }

        pool.query(queries.deleteUser, [id], (err, data) => {
            if (err) return res.status(404).send('Bad request');
            res.status(200).send('User removed');
        });
    });
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUsername,
    updateEmail,
    updatePassword,
    updateImage,
    deleteUser
}