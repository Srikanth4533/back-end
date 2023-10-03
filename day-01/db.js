const mongoose = require("mongoose");

const friendsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Friends = new mongoose.model("Friend", friendsSchema);

module.exports = Friends;
