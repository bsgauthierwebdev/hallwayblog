const express = require('express');
const authRoutes = require('./routes/auth');
const postRoutes = require('./src/posts/routes');
const userRoutes = require('./src/users/routes');
const app = express();
const port = 8800;

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