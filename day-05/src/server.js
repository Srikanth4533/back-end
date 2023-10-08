const express = require("express");
const adminRoute = require("./routes/adminRoute");
const customerRoute = require("./routes/customerRoute");
const sellerRoute = require("./routes/sellerRoute");
const customerCareRoute = require("./routes/customerCareRoute");
const deliveryPartnerRoute = require("./routes/deliveryPartnerRoute");
const deliveryBoyRoute = require("./routes/deliveryBoyRoute");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Home Page",
  });
});

// Admin Routes
app.use("/api/admin", adminRoute);

// Customer Routes
app.use("/api/customer", customerRoute);

// Seller Routes
app.use("/api/seller", sellerRoute);

// Customer Care Routes
app.use("/api/customercare", customerCareRoute);

// Delivery Partner Routes
app.use("/api/deliverypartner", deliveryPartnerRoute);

// Delivery Boy Routes
app.use("/api/deliveryboy", deliveryBoyRoute);

//

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port no ${process.env.PORT}`);
});
