import React, { useEffect, useState } from "react";
import { db } from '../configuration';
import { onValue, ref, set, update } from 'firebase/database';
import Form from "../components/Form";

// useEffect(() => {
//   function getURL() {
//     const url = window.location.href.split("/")[-1]
//     console.log(url)
//   }  
// }, []);

const Register = () => {
  const [eventName, setEventName] = useState("");


  useEffect(() => {
    
    const url = window.location.href.split("/")
    const eventKey = url[url.length - 1]
    setEventName(eventKey)
    console.log(eventKey)

  }, []);

  function writeData(H) {
    const countRef = ref(db, `/events/${eventName}/count`);
    var i = 0;

    onValue(countRef, (snapshot) => {
          const value = snapshot.val();
          i = value ? Number(value.number) + 1 : 0;
        });
    const dbRef = ref(db, `/events/${eventName}/entry-${i}`); // Replace "your-node" with your database path
    set(dbRef, H)
      .then(() => {
        console.log("Data written successfully!");
      })
      .catch((error) => {
        console.error("Error writing data:", error);
      });
    set(countRef, {number: i})
      .then(() => {
        console.log("Data written successfully!");
      })
      .catch((error) => {
        console.error("Error writing data:", error);
      });
  }

  const eventForms = [
    [
      <input type="text" name="name" placeholder="Name"></input>,
      <input type="password" name="pass" placeholder="Pass"></input>
    ]
  ]
  const logFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const holder = new Object();
    for (const [name, val] of data) {
      
      holder[name] = val;
      // {
      //   name, ":", val
      // }
      // console.log(name, ":", val);
      console.log(holder);
    }
    writeData(holder);

  };
  return (
    <div> 
      { eventName }
      <form method="POST" onSubmit={(e) => {logFormData(e)}}>
        <Form eventForm={eventForms[0]}/>
        <input type="submit" label="Less Fuking Go"></input>
      </form>
    </div>
  )
}

export default Register