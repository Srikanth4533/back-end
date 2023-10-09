exports.testHandler = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Test Route Working",
  });
};

exports.testOrdersHandler = (req, res) => {
  function getRandomOrbitary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  if (Math.random() > 0.5 ? true : false) {
    let orderArr = [];

    let num = Math.ceil(Math.random() * 20);
    for (let i = 0; i <= num; i++) {
      orderArr.push({
        order_id: getRandomOrbitary(1000, 99999),
        arrives_at_utc: +new Date() + getRandomOrbitary(-7, 7),
        paid_with: Math.random() > 0.5 ? "Cash" : "Wallet",
        total_paid: getRandomOrbitary(10, 99),
      });
    }

    res.status(200).json({
      status: "success",
      orders: orderArr,
    });
  } else {
    res.status(503).send();
  }
};
