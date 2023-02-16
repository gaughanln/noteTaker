// GET Route for homepage - this 
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
const { v1: uuidv1 } = require('uuid');


// "/notes"
const readFromFile = util.promisify(fs.readFile);
const appendFile = util.promisify(fs.appendFile);

// GET route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for retrieving all the feedback. Reads tje db.json file and returns all saved notes as json
router.get('/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// reading the existing file and appending new notes to the existing notes
const readAndAppend = (newNote, filePath) => {
   fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);
   
    return fs.writeFile(filePath, JSON.stringify(notes), (err) => {
      if (err) throw err;
    });
  })
   
};

// receives new notes to save and adds to the db.json file
router.post('/notes', (req, res) => {
  const { title, text } = req.body

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv1()
    }
    readAndAppend(newNote, './db/db.json');
    res.json('note added');
  } else {
    res.error('Error, try again')
  }
});


//bonus: delete requests

module.exports = router

// grab the id and update to delete - look at the event listeners for this info
//will need to be written in apiroutes.js - READ DOCUMENTATION
// 
