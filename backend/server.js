const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Movie Routes
app.use("/api/movies", require("./routes/movieRoutes"));

//User Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
