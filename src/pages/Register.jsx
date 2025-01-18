import React, { useEffect, useState } from "react";
import { db } from '../configuration';
import { onValue, ref, set, update } from 'firebase/database';
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import eventForms from "../data/eventData.jsx"

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
    console.log(eventForms["mundane"])

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

  

  const logFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const holder = new Object();
    for (const [name, val] of data) {
      const formFields = eventForms[eventName].map((e) => (e.name ? e.name : e));

      if (formFields.includes(name)) {
        if (val.trim() === "") return
        holder[name] = val;
      }
    }
    writeData(holder);

  };
  if (eventForms[eventName]){
    return (
      <>
      <Navbar />
      <div className="form-container"> 
        <h1 className="form-title"> Register for { eventName }</h1>
        <form method="POST" onSubmit={(e) => {logFormData(e)}} className="regform">
          <Form eventForm={eventForms[eventName]}/>
          <input type="submit" className="submit-btn merch-btn" value="Proceed"/>
        </form>
      </div>
      </>
    )
  } else {
    return(<h1>Wrong Place BRAH!</h1>);
  }
}

export default Register