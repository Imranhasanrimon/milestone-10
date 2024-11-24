const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const users = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 28,
        isActive: true,
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        age: 34,
        isActive: false,
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        age: 22,
        isActive: true,
    },
    {
        id: 4,
        name: "Diana Prince",
        email: "diana.prince@example.com",
        age: 30,
        isActive: false,
    },
    {
        id: 5,
        name: "Evan Wright",
        email: "evan.wright@example.com",
        age: 26,
        isActive: true,
    },
];

//middleware
app.use(cors())
app.use(express.json())

app.get('/practice', (req, res) => {
    res.send('this is server homepage')
})

app.get('/practice/users', (req, res) => {
    res.send(users)
})
app.post('/practice/users', (req, res) => {
    console.log('post API hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log('this server is runnign on port:', port);
})