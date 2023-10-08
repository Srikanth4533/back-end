exports.testHandler = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Test Route Working",
  });
};

exports.testOrdersHandler = (req, res) => {
  if (Math.random() > 0.5 ? true : false) {
    let orderArr = [];

    let num = Math.ceil(Math.random() * 20);
    for (let i = 0; i <= num; i++) {
      orderArr.push({
        order_id: Math.ceil(Math.random() * 99000 + 1000),
        arrives_at_utc: Math.random() > 0.5 ? Date.now() - 5 : Date.now() + 4,
        paid_with: Math.random() > 0.5 ? "Cash" : "Online",
        total_paid: Math.floor(Math.random() * 90 + 10),
      });
    }

    res.status(200).json({
      status: "success",
      data: orderArr,
    });
  } else {
    res.status(503).send();
  }
};
