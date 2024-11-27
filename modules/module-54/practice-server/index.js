const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5500;

//middleware
app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: 'imran', age: 23 },
    { id: 2, name: 'rimon', age: 26 },
    { id: 3, name: 'hasan', age: 30 },
]

app.get("/", (req, res) => {
    res.send('this is root path')
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(users)
})

app.listen(port, () => {
    console.log('server is running on port: ', port);
})