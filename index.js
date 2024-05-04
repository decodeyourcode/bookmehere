/*
const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


const bookRouter = require('./routes/book.router')

app.use("/api/v1/books", bookRouter)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))*/
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost 3000");
});
