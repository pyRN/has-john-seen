const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Movie Routes
app.use("/api/movies", require("./routes/movieRoutes"));

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
