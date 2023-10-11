const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
require("dotenv").config();

const app = express();

app.use(express.json());

// Database Connection
connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.use("/api/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port no ${process.env.PORT}`);
});
