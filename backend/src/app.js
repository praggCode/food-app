const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

const authRoutes = require("./routes/auth.route")

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use("/api/auth", authRoutes)

module.exports = app