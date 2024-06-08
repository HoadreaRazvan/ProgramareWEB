const express = require('express');
const router = express.Router();
const Resource = require('../models/resource');

// Middleware for formatting data
const formatData = (req, res, next) => {
  // Add your formatting logic here
  next();
};

// Middleware for checking custom header
const checkCustomHeader = (req, res, next) => {
  if (req.headers['x-custom-header'] !== 'expected-value') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};

// GET all resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET resource by ID
router.get('/:id', async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET resource by query parameters (e.g., author)
router.get('/search', async (req, res) => {
  try {
    const query = req.query;
    const resources = await Resource.find(query);
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new resource
router.post('/', formatData, async (req, res) => {
  const resource = new Resource(req.body);
  try {
    const newResource = await resource.save();
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT to update a resource
router.put('/:id', formatData, async (req, res) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedResource) return res.status(404).json({ message: 'Resource not found' });
    res.json(updatedResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH to partially update a resource
router.patch('/:id', formatData, async (req, res) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedResource) return res.status(404).json({ message: 'Resource not found' });
    res.json(updatedResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a resource
router.delete('/:id', async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.json({ message: 'Resource deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;




const { check, validationResult } = require('express-validator');

// POST a new resource with validation
router.post(
  '/',
  [
    check('title').not().isEmpty().withMessage('Title is required'),
    // Add more validation rules as needed
  ],
  formatData,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const resource = new Resource(req.body);
    try {
      const newResource = await resource.save();
      res.status(201).json(newResource);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);
