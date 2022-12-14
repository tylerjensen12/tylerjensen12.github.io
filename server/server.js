const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static('Pics'))

//endpoints
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
})
app.get("/css", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.css"))
})

app.listen(4005, () => console.log('Server is up on port 4005'))