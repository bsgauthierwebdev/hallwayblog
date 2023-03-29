const express = require('express');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const port = 8800;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, user!!');
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});