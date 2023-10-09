exports.handleGetStudents = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Get All Students",
  });
};
