const express = require("express")
const app = express()
app.use(express.json())

const userRouter = require('./routes/user.router')

app.use("/api/v1/user", userRouter)

app.listen(5000, () => console.log("Server is running on port 5000"))
