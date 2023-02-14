const express = require('express');
// const path = require('path');
// Bring in the routes apiRoutes + htmlRoutes

const PORT = process.env.port || 3001;

const app = express();

// will need to also add hosting of static folder and...

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);