exports.adminCustomerHandler = (req, res) => {
  // We will get this data from MongoDB
  let customerData = {
    name: "Srikanth",
    surname: "Kondakalla",
  };

  res.status(200).json({
    status: "success",
    message: "Admin route",
    data: customerData,
  });
};

exports.adminOrderHandler = (req, res) => {
  let orderDetails = {
    name: "Dominoss Pizza",
    restaurantName: "Airport Pizza Hut",
    price: 599,
  };
  res.status(200).json({
    status: "success",
    message: "Handling Admin Orders",
    data: orderDetails,
  });
};
