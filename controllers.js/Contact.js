const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Assuming the schema is defined in a separate file

// POST (create) a new contact entry
router.post('/contacts', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET all contact entries
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.delete('/contacts/:id', async (req, res) => {
    try {
      const deletedContact = await Contact.findByIdAndDelete(req.params.id);
      if (deletedContact) {
        res.json({ message: 'Contact entry deleted successfully' });
      } else {
        res.status(404).json({ error: 'Contact entry not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
