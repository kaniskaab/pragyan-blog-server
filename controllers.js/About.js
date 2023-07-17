const express = require('express');
const router = express.Router();
const About = require('../models/About'); // Assuming the schema is defined in a separate file

// GET all "about" elements
router.get('/about', async (req, res) => {
  try {
    const aboutElements = await About.find();
    res.json(aboutElements);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new "about" element
router.post('/about', async (req, res) => {
  try {
    const newAbout = await About.create(req.body);
    res.status(201).json(newAbout);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) an existing "about" element
router.put('/about/:id', async (req, res) => {
  try {
    const updatedAbout = await About.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedAbout) {
      res.json(updatedAbout);
    } else {
      res.status(404).json({ error: 'About element not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
