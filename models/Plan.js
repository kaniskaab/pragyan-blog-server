const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
      },
  planName: {
    type: String,
    required: true
  },
  targetAudience: {
    type: String,
    required: true
  },
  planDetails: {
    type: String,
    required: true
  },
  perks: [{
    points: {
      type: String,
      required: true
    },
    // Additional properties for each perk if needed
  }],
  consultation: [{
    topic: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    // Additional properties for each consultation if needed
  }],
  price: {
    type: Number,
    required: true
  }
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
