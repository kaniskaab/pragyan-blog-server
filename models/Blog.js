const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  writerName: {
    type: String,
    required: true
  },
  instagram: String,
  facebook: String,
  twitter: String,
  linkedin: String,
  heading: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  more: [{
    subheading: String,
    content: String,
    more: String,
    moreData: String
  }],
  time: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  }
});

const Blog = mongoose.model('Post', blogSchema);

module.exports = Blog;
