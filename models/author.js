const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    authorid:String,
    first_name:String,
    last_name:String
})

const Author = mongoose.model("Author", authorSchema)

module.exports = Author