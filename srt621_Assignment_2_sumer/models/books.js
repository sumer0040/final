const mongoose = require("mongoose"),
bookSchema = mongoose.Schema({bookNumber:Number,bookName: String, author: String, link: String,});
module.exports = mongoose.model("Book",bookSchema);