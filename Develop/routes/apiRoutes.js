// GET Route for homepage - this 
const express = require('express');
const router = express.Router();
const path = require('path');

// GET route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for retrieving all the feedback
router.get('/api/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);


// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 
router.post('/notes', (req, res) => {
 const {title, text} = req.body

 if (title && text) {
  const newNote = {
    title,
    text
  }

  readAndAppend(newNote, './db/db.json');
  res.json('note added');
 } else {
  res.errored('Error, try again')
 }
});


//bonus: delete requests

module.exports = router