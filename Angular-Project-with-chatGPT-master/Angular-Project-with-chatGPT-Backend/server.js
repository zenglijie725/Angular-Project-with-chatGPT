const express = require('express');
const app = express();

// Serve static files from the ng-demo folder inside the public directory
app.use(express.static('public/ng-demo'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});