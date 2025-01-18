const express = require("express");
const serverless = require('serverless-http');
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const registerRoute = require("./routes/register");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('App is running..');
});
app.use("/register", registerRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports.handler = serverless(app);