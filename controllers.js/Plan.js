const express = require('express');
const router = express.Router();
const Plan = require('../models/Plan'); // Assuming the schema is defined in a separate file

// GET all plans
router.get('/plans', async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a specific plan by ID
router.get('/plans/:id', async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (plan) {
      res.json(plan);
    } else {
      res.status(404).json({ error: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST (create) a new plan
router.post('/plans', async (req, res) => {
  try {
    const newPlan = await Plan.create(req.body);
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) an existing plan
router.put('/plans/:id', async (req, res) => {
  try {
    const updatedPlan = await Plan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedPlan) {
      res.json(updatedPlan);
    } else {
      res.status(404).json({ error: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE a plan by ID
router.delete('/plans/:id', async (req, res) => {
  try {
    const deletedPlan = await Plan.findByIdAndDelete(req.params.id);
    if (deletedPlan) {
      res.json({ message: 'Plan deleted successfully' });
    } else {
      res.status(404).json({ error: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
