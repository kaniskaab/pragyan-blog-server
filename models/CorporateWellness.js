const mongoose = require('mongoose');

const corporateWellnessSchema = new mongoose.Schema({
  whatIsCorporateWellness: {
    type: String,
    required: true
  },
  benefits: {
    type: [String],
    required: true
  },
  whatDoWeOffer: {
    type: String,
    required: true
  }
});

const CorporateWellness = mongoose.model('CorporateWellness', corporateWellnessSchema);

module.exports = CorporateWellness;
