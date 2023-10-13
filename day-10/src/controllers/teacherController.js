exports.handleTeacherCreate = (req, res) => {
  const { firstName, lastName } = req.body;
  res.send("Ok");
};
