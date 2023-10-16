const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect(`mongodb://127.0.0.1/labs`)
  .then(() => {
    console.log(`MongoDB connected successfully...`);
  })
  .catch((err) => {
    console.log(`DB connection error`);
    console.log(err);
  });

const studentSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    roll: Number,
    birthday: Date,
    address: String,
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home Page",
  });
});

app.post("/api/student/create", async (req, res) => {
  const { id, name, roll, birthday, address } = req.body;
  const student = await Student.create({
    id,
    name,
    roll,
    birthday,
    address,
  });

  res.status(201).json({
    message: "Student Created Successfully...",
    data: student,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
