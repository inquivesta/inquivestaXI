import { db } from '../configuration';
import { onValue, ref, set, update } from 'firebase/database';
import { useEffect, useState } from "react";
import React from 'react'

const Test = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(db, "key2"); // Replace "your-node" with your db path
    onValue(dbRef, (snapshot) => {
      const value = snapshot.val();
      setData(value);
    });
  }, []);

    function writeData() {
        const dbRef = ref(db, "key2"); // Replace "your-node" with your database path
        update(dbRef, { key5 : "value" })
          .then(() => {
            console.log("Data written successfully!");
          })
          .catch((error) => {
            console.error("Error writing data:", error);
          });
      }
      function getURL() {
        console.log(window.location.href);
      }
  return (
    <div>
    <h1>Data from Firebase:</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <button onClick={writeData}>Click</button>
  </div>
  )
}

export default Test