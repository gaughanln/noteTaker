// GET Route for homepage - this 
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const util = require('util');


const readFromFile = util.promisify(fs.readFile);
const appendFile = util.promisify(fs.appendFile);

// GET route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for retrieving all the feedback. Reads tje db.json file and returns all saved notes as json
router.get('/api/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// reading the existing file and appending new notes to the existing notes
  const readAndAppend = (newNote, filePath) => {
    return readFile(filePath, 'utf8')
      .then((data) => {
        const notes = JSON.parse(data);
        notes.push(newNote);
        return appendFile(filePath, JSON.stringify(notes));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // receives new notes to save and adds to the db.json file
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