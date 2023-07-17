const express = require('express');
const router = express.Router();
const Footer = require('../models/Footer'); // Assuming the schema is defined in a separate file

// GET footer details
router.get('/footer', async (req, res) => {
  try {
    const footer = await Footer.find();
    if (footer) {
      res.json(footer);
    } else {
      res.status(404).json({ error: 'Footer details not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST (create) footer details
router.post('/footer', async (req, res) => {
  try {
    const newFooter = await Footer.create(req.body);
    res.status(201).json(newFooter);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) footer details
router.put('/footer/:id', async (req, res) => {
  try {
    const updatedFooter = await Footer.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (updatedFooter) {
      res.json(updatedFooter);
    } else {
      res.status(404).json({ error: 'Footer details not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
