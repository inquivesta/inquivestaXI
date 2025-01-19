const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: "inquivesta-xi.firebaseapp.com",
  projectId: "inquivesta-xi",
  storageBucket: "inquivesta-xi.firebasestorage.app",
  messagingSenderId: process.env.VITE_MSG_ID,
  appId: process.env.VITE_APP_ID,
  databaseURL: process.env.VITE_DB_URL,
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

module.exports = { database };