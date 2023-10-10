const express = require("express");
const connectDB = require("./config/db");
const usersRoute = require("./routes/usersRoute");
require("dotenv").config();

const app = express();

// DB connection
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.use("/api/user", usersRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT no ${process.env.PORT}`);
});
