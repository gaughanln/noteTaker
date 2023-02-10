const express = require('express');
const path = require('path');
const api = require('./Develop/public/assets/js/index')

const PORT = process.env.port || 3001;

const app = express();

//HTML ROUTES SHOULD BE CREATED 
// GET /notes should return the notes.html file.
// GET * should return the index.html file.

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);