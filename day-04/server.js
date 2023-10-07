const express = require("express");
require("dotenv").config();
const adminRouter = require("./routes/adminRoute");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Home Page",
  });
});

app.use("/api/admin", adminRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port no ${process.env.PORT}`);
});
