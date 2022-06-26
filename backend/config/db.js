const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`MongoDB Connection Error: ${error}`.red.underline);
    process.exit(1);
  }
};

module.exports = connectDB;
