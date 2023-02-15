const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const path = require('path');
// Bring in the routes apiRoutes + htmlRoutes

const PORT = process.env.port || 3001;

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
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);