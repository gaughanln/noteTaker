// GET Route for homepage - this 
const express = require('express');
const router = express.Router();
const path = require('path');

// GET route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

// GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router