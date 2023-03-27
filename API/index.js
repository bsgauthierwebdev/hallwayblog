const express = require('express');
const port = 8800;

const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});