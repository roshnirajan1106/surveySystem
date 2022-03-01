const PORT = 8000;
const express = require('express');
const app = express();
const http = require('http').createServer(app);

http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});