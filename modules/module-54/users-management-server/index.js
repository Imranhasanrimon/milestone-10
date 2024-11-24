const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: 'imran Hasan', email: 'imranhasan@gmail.com' },
    { id: 2, name: 'abul Hasan', email: 'abulhasan@gmail.com' },
    { id: 3, name: 'rimon Hasan', email: 'rimonhasan@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('this will be shown in the browser');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`my server is running on port: ${port}`);
})