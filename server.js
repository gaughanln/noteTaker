const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const path = require('path');
// Bring in the routes apiRoutes + htmlRoutes

const PORT = process.env.PORT || 3001;
const host = '0.0.0.0'

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files
app.use(express.static('public'));

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.get("*", (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.listen(PORT, host, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column

// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).