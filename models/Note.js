console.log('inside Note.js');

// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var NoteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  },
  // a string
  title: String,
  // `body` is of type String
  body: String
});



// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;

