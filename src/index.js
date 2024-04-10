const express = require('express');
const path = require('path');

const imageRoute = require('./routes/image');

const port = 3000;
const server = express();
const publicPath = path.join(__dirname, '/public');

server.use(express.static(publicPath));
server.use('/image', imageRoute);

server.listen(port, () => {
    console.log(`This app running at http://localhost:${port}`);
})