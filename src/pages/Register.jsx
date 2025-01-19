import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form.jsx";
import Navbar from "../components/Navbar.jsx";
import eventForms from "../data/eventData.jsx";

const Register = () => {
  const [eventName, setEventName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href.split("/");
    const eventKey = url[url.length - 1];
    setEventName(eventKey);
  }, []);

  const logFormData = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const holder = new Object();

    holder["event"] = eventName;
    for (const [name, val] of data) {
      const formFields = eventForms[eventName].map((e) =>
        e.name ? e.name : e
      );

      if (formFields.includes(name)) {
        if (val.trim() === "") return;
        holder[name] = val;
      }
    }

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(holder), // Send data as JSON
      });

      const data = await response.json();
      alert(data["message"]);
      navigate("/events");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  if (eventForms[eventName]) {
    return (
      <>
        <Navbar />
        <div className="form-container">
          <h1 className="form-title"> Register for {eventName}</h1>
          <div className="form-qr">

            <form
              onSubmit={(e) => {
                logFormData(e);
              }}
              className="regform"
            >
              <Form eventForm={eventForms[eventName]} />
              <input
                type="submit"
                className="submit-btn merch-btn"
                value="Proceed"
              />
            </form>
            <img className="payment-img" src="/team/debayan.jpg" />
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Wrong Place BRAH!</h1>;
  }
};

export default Register;
