const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5500;

//middleware
app.use(cors())

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

app.listen(port, () => {
    console.log('server is running on port: ', port);
})