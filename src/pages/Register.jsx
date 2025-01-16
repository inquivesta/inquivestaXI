import React, { useEffect, useState } from "react";

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

  return (
    <div> 
      { eventName }
    </div>
  )
}

export default Register