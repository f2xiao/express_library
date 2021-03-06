const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    name: {type: String,minlength:3,maxlength:100, required: true},
  }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/genres/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);