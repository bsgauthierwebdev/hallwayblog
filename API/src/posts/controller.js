const pool = require('../../db');

const testPostRoutes = (req, res) => {
    res.json('Post Routes are okay');
};

module.exports = {
    testPostRoutes
};