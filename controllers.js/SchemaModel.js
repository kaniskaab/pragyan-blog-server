const express = require('express');
const router = express.Router();
const SchemaModel = require('../models/SchemaModel'); // Assuming the schema is defined in a separate file

// CREATE a new schema
router.post('/schemas', async (req, res) => {
  try {
    const newSchema = await SchemaModel.create(req.body);
    res.status(201).json(newSchema);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// READ all schemas
router.get('/schemas', async (req, res) => {
  try {
    const schemas = await SchemaModel.find();
    res.json(schemas);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// READ a specific schema by ID
router.get('/schemas/:id', async (req, res) => {
  try {
    const schema = await SchemaModel.findById(req.params.id);
    if (schema) {
      res.json(schema);
    } else {
      res.status(404).json({ error: 'Schema not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// UPDATE a schema by ID
router.put('/schemas/:id', async (req, res) => {
  try {
    const updatedSchema = await SchemaModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedSchema) {
      res.json(updatedSchema);
    } else {
      res.status(404).json({ error: 'Schema not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE a schema by ID
router.delete('/schemas/:id', async (req, res) => {
  try {
    const deletedSchema = await SchemaModel.findByIdAndDelete(req.params.id);
    if (deletedSchema) {
      res.json({ message: 'Schema deleted successfully' });
    } else {
      res.status(404).json({ error: 'Schema not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
