// * Model for a to-do-list

// Initialise Mongoose
var mongoose = require("mongoose")

var ListSchema = new mongoose.Schema({
    title: String,
    body: String
    listId: {type: String, required: True}
})  

var List = mongoose.model("List", ListSchema)

module.exports = List;