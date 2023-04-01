const getUsers = 'SELECT * FROM users ORDER BY id ASC';
const getUserById = 'SELECT * FROM users WHERE id = $1';
const checkUserExists = 'SELECT * FROM users WHERE username = $1 OR email = $2';
const addUser = 'INSERT INTO users (username, email, pw, img) VALUES ($1, $2, $3, $4)';
const updateUsername = 'UPDATE users SET username = $1 WHERE id = $2';
const updateEmail = 'UPDATE users SET email = $1 WHERE id = $2';
const updatePassword = 'UPDATE users SET pw = $1 WHERE id = $2';
const updateImage = 'UPDATE users SET img = $1 WHERE id = $2';
const deleteUser = 'DELETE FROM users WHERE id = $1';
// const updateUserInfo = 'UPDATE users SET username = $1 email = $2 pw = $3 img = $4 WHERE id = $5';

module.exports = {
    getUsers,
    getUserById,
    checkUserExists,
    addUser,
    updateUsername,
    updateEmail,
    updatePassword,
    updateImage,
    deleteUser
}