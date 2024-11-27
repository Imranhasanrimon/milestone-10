const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5500;

//middleware
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send('this is root path')
})


app.listen(port, () => {
    console.log('server is running on port: ', port);
})