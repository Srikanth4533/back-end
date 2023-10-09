const express = require("express");
const connectDB = require("./config/db");
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// Database Connection
connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Home Page",
  });
});

app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
