const express = require("express");
const { onValue, ref, get, set, push } = require("firebase/database");
const { database } = require("../firebaseConfig");

const router = express.Router();

router.get("/", async (req, res) => {
  // try {
  //   const dbRef = ref(database, "key1");
  //   const snapshot = await get(dbRef);
  //   if (snapshot.exists()) {
  //     res.status(200).json(snapshot.val());
  //   } else {
  //     res.status(404).json({ message: "No data found" });
  //   }
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
  res.send("Nice try Diddy...");
});

router.post("/", async (req, res) => {
  try {

    const eventName = req.body["event"];
    delete req.body["event"];
    const countRef = ref(database, `/events/${eventName}/count`);
    var i = 0;

    onValue(countRef, (snapshot) => {
          const value = snapshot.val();
          i = value ? Number(value.number) + 1 : 0;
        });

    const dbRef = ref(database, `/events/${eventName}/entry-${i}`);
    await set(dbRef, req.body);
    await set(countRef, {number : i});
    res.status(201).json({ message: "Registration successful" });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }

});

module.exports = router;
