const mongoose = require("mongoose");

const credSchema = new mongoose.Schema({
  email: { type: String, required: true },
  hash: { type: String, required: true },
  name: { type: String },
  otp:Number,
  // data: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "userData",
  //   },
  // ],
});

const credModel = mongoose.model("cred", credSchema);

module.exports = credModel;
