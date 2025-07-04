const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("✅ MongoDB Connected")
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message)
    process.exit(1) // Exit process if DB connection fails
  }
}

module.exports = connectDB
