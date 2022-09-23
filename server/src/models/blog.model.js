const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  project: String,
  task: String,
  note: String,
  entrydate: String,
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  cred:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cred",
  },
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
