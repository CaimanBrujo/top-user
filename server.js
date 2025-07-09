const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Use user routes
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
