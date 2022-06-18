const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

//Movie Routes
app.use("/api/movies", require("./routes/movieRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
