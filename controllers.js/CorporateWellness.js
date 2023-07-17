const express = require('express');
const router = express.Router();
const CorporateWellness = require('../models/CorporateWellness'); // Assuming the schema is defined in a separate file

// GET all corporate wellness data
router.get('/corporateWellness', async (req, res) => {
  try {
    const corporateWellnessData = await CorporateWellness.find();
    res.json(corporateWellnessData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a specific corporate wellness data by ID
router.get('/corporateWellness/:id', async (req, res) => {
  try {
    const corporateWellnessData = await CorporateWellness.findById(req.params.id);
    if (corporateWellnessData) {
      res.json(corporateWellnessData);
    } else {
      res.status(404).json({ error: 'Corporate wellness data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST (create) a new corporate wellness data
router.post('/corporateWellness', async (req, res) => {
  try {
    const newCorporateWellnessData = await CorporateWellness.create(req.body);
    res.status(201).json(newCorporateWellnessData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) an existing corporate wellness data
router.put('/corporateWellness/:id', async (req, res) => {
  try {
    const updatedCorporateWellnessData = await CorporateWellness.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedCorporateWellnessData) {
      res.json(updatedCorporateWellnessData);
    } else {
      res.status(404).json({ error: 'Corporate wellness data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE a corporate wellness data by ID
router.delete('/corporateWellness/:id', async (req, res) => {
  try {
    const deletedCorporateWellnessData = await CorporateWellness.findByIdAndDelete(req.params.id);
    if (deletedCorporateWellnessData) {
      res.json({ message: 'Corporate wellness data deleted successfully' });
    } else {
      res.status(404).json({ error: 'Corporate wellness data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
