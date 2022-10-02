const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  category:String,
  desFive1:String,
  desFive2:String,
  desFive3:String,
  desFive4:String,
  desFour1:String,
  desFour2:String,
  desFour3:String,
  desFour4:String,
  desOne1: String,
  desOne2: String,
  desOne3: String,
  desOne4: String,
  desThree1: String,
  desThree2: String,
  desThree3: String,
  desThree4: String,
  desTwo1: String,
  desTwo2: String,
  desTwo3: String,
  desTwo4: String,
  description: String,
  fb: String,
  ig: String,
  lnk: String,
  subFive: String,
  subFour: String,
  subOne: String,
  subThree: String,
  subTwo: String,
  title: String,
  tw: String,
  cred:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cred",
  },
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
