const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

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

app.post('/users', (req, res) => {
    console.log('post api hitting');
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`my server is running on port: ${port}`);
})