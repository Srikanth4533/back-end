const express = require("express");
const testRoute = require("./routes/testRoute");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Home Page",
  });
});

app.use("/api/test", testRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is runnig on port ${process.env.PORT}`);
});
