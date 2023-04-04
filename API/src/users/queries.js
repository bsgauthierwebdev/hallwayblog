const checkUserExists = 'SELECT * FROM users WHERE username = ? OR email = ?';

const getUsers = 'SELECT * FROM users ORDER BY id ASC';

const getUserById = 'SELECT * FROM users WHERE id = $1';

module.exports = {
    checkUserExists,
    getUsers,
    getUserById
};