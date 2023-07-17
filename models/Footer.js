const mongoose = require('mongoose');

const footerSchema = new mongoose.Schema({
  facebook: {
    type: String,
    required: false
  },
  instagram: {
    type: String,
    required: false
  },
  linkedin: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: false
  }
});

const Footer = mongoose.model('Footer', footerSchema);

module.exports = Footer;
