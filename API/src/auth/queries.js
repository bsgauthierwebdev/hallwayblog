const checkUsername = 'SELECT * FROM users WHERE username = $1';

const checkEmail = 'SELECT * FROM users WHERE email = $1';

const addUser = 'INSERT INTO users (username, email, pw) VALUES ($1, $2, $3)';

module.exports = {
    checkUsername,
    checkEmail,
    addUser
};