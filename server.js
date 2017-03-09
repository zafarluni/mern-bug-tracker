const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('static'));


app.listen(3000, () => {
    console.log('App started on port 3000');
});