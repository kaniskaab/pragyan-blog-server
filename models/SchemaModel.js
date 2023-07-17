const mongoose = require('mongoose');

const schemaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  articles: {
    type: Number,
    required: true
  }
});

const SchemaModel = mongoose.model('SchemaModel', schemaSchema);

module.exports = SchemaModel;
