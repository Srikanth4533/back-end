const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const teacherRoute = require("./routes/teacherRoute");
require("dotenv").config();

const app = express();

// MongoDB Connection
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.use("/api/user", userRoute);
app.use("/api/teacher", teacherRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT no ${process.env.PORT}`);
});
