const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    }
});

const About = mongoose.model('AboutDetails', aboutSchema);

module.exports = About;
