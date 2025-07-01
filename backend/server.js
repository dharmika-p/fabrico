const express = require('express')
const cors = require('cors')
const connectDB = require('./config/dbConn')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

// CORS Configuration
const allowedOrigins = ['https://fabricoadmin.onrender.com']

app.use(cors({
    origin: allowedOrigins,
    credentials: true // if using cookies or auth headers (optional)
}))

// Middleware
app.use(express.json())
app.use("/image", express.static('uploads'))

// Connect to DB
connectDB()

// Routes
app.use('/api/cloth', require('./routes/clothRouter'))
app.use('/api/user', require('./routes/userRouter'))
app.use('/api/cart', require('./routes/cartRouter'))
app.use('/api/order', require('./routes/orderRouter'))

// Test Route
app.get("/", (req, res) => {
    res.send("API Working")
})

// Start Server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})
