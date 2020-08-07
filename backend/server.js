const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// App
const app = express();

if (isProduction) {
  // Serve dist files if is production mode
  const distPath = path.resolve(__dirname, '../frontend/dist/prod');
  app.use(express.static(distPath));
  app.get('*', (_, res) => {
    res.sendFile(`${distPath}/index.html`);
  });
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
