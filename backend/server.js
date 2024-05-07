import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import devRoutes from "./routes/dev.routes.js"
import cookieParser from "cookie-parser"
import connectToMongoDB from "./db/connectToMongoBD.js"

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.use("/api/dev/", devRoutes)

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`);
})