// GET Route for homepage - this 
const express = require('express');
const router = express.Router();
const path = require('path');

// GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

router.post('/notes', (req, res) =>
  // add - can keep send file 
))
);

// get post - this is where we receive 

//bonus: delete requests

module.exports = router