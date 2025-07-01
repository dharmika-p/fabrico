const express = require('express')
const app = express()
const connectDB = require('./config/dbConn')
require('dotenv').config()

const cors = require('cors')

// ✅ SET CORS OPTIONS
const corsOptions = {
  origin: ['https://fabrico.onrender.com', 'https://fabricoadmin.onrender.com'], 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}
app.use(cors(corsOptions))

// other middlewares
app.use(express.json())
app.use("/image", express.static('uploads'))

// connect DB
connectDB()

// routes
app.use('/api/cloth', require('./routes/clothRouter'))
app.use('/api/user', require('./routes/userRouter'))
app.use('/api/cart', require('./routes/cartRouter'))
app.use('/api/order', require('./routes/orderRouter'))

app.get("/", (req, res) => {
  res.send("API Working")
})

// start server
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})
