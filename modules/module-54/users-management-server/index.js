const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('this will be shown in the browser');
})

app.listen(port, () => {
    console.log(`my server is running on port: ${port}`);
})