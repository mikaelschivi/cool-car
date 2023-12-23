const express = require('express');
const expressApp = require('./express-app');
const { dbConnection } = require('./db');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3001;

const StartServer = async() => {
    const app = express();

    await dbConnection();
    await expressApp(app);

    app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
      console.log(err);
      process.exit();
    })
}
StartServer();