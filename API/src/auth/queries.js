const checkUserExists = 'SELECT * FROM users WHERE username = $1 OR email = $2';

const addUser = 'INSERT INTO users (username, email, pw) VALUES ($1, $2, $3)';

module.exports = {
    checkUserExists,
    addUser
};