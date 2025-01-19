const express = require("express");
const serverless = require('serverless-http');
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const registerRoute = require("./routes/register");

const app = express();
// const allowedDomain = "https://inquivesta.in";
const allowedDomains = [
  "http://localhost:5173", 
  "https://inquivesta.in", 
  "https://www.inquivesta.in", 
];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin || allowedDomains.includes(origin)) {
//       callback(null, true); 
//     } else {
//       callback(new Error("Not allowed by CORS")); 
//     }
//   },
// }));


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