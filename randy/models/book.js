const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Character = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  picture: {type:String, require:true},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", Character);

module.exports = Book;