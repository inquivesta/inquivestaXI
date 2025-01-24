import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { eventForms } from "../data/formFields";

const Registrations = () => {
  const [login, setlogin] = useState(false);
  const [permEvents, setpermEvents] = useState(null);
  const [eventData, seteventData] = useState(null);
  const [uname, setUname] = useState("");
  // const [token, setToken] = useState("");
  const navigate = useNavigate();

  const getEventsData = async (username, sessionCookie) => {
    const holder = { username: username, sessionCookie: sessionCookie };
    try {
      const response = await fetch(import.meta.env.VITE_DATA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(holder), // Send data as JSON
      });

      const data = await response.json();
      //   console.log(data["userdata"]);
      //   Cookies.set('inquivestaUsername', data.userdata.username, { expires: 10 });
      //   Cookies.set('inquivestaToken', data.userdata.token, { expires: 10 });
      // alert(data.message);
      setlogin(data.status);
      setpermEvents(data.events.split(","));
      seteventData(data.eventData);
    } catch (error) {
      console.error("Error posting data:", error);
      alert("An Error Occurred. Please Try Again.");
      navigate("/eventlogin");
    }
  };
  // const cookielogin = async (username, cookie) => {
  //   const holder = { username: username, sessionCookie: cookie };
  //   try {
  //     const response = await fetch(import.meta.env.VITE_LOGIN, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(holder), // Send data as JSON
  //     });

  //     const data = await response.json();
  //     //   console.log(data["userdata"]);
  //     //   Cookies.set('inquivestaUsername', data.userdata.username, { expires: 10 });
  //     //   Cookies.set('inquivestaToken', data.userdata.token, { expires: 10 });
  //     setlogin(data.status);
  //     setpermEvents(data.events.split(","));
  //   } catch (error) {
  //     console.error("Error posting data:", error);
  //     alert("An Error Occurred. Please Try Again.");
  //   }
  // };
  const logout = () => {
    Cookies.remove("inquivestaUsername");
    Cookies.remove("inquivestaToken");
    navigate("/eventlogin");
  };
  useEffect(() => {
    const username = Cookies.get("inquivestaUsername");
    const sessionCookie = Cookies.get("inquivestaToken");
    setUname(username);
    // setToken(sessionCookie);
    if (username) {
      // cookielogin(username, sessionCookie);
      getEventsData(username, sessionCookie);
    }
  }, []);
  if (login) {
    if (permEvents) {
      if (!eventData) {
        return <h1>Loading Data...</h1>;
      } else {
        // console.log(eventData);
        return (
          <>
            <span>Logged in as: {uname}<button onClick={logout}>Logout</button></span>
            {permEvents
              ? permEvents.map((event, i) => (
                  <div key={i} className="table-container">
                    <h2 className="table-title">{eventForms[event].formTitle}</h2>
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          {eventForms[event].form.map((e, j) => (
                            <th key={`heading${event}${j}`}>
                              {e.name ? (e.label ? e.label : e.name) : e}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      {eventData[event] &&
                      <tbody>
                        {
                          Object.keys(eventData[event]).map((e, k) => (
                            <tr key={e}>
                              <td>{k + 1}</td>
                              {
                                eventForms[event].form.map((field, j) => (
                                  <td key={`${event}${j}`}>{eventData[event][e][field.name ? field.name : field] ? eventData[event][e][field.name ? field.name : field] : "-"}</td>
                                  // <td key={`${event}${j}`}>{eventData[event][e][field]}</td>
                                ))
                              }
                            </tr>
                          ))
                        }
                      </tbody>
                      }
                    </table>
                  </div>
                ))
              : ""}
          </>
        );
      }
    } else {
      return (
        <>
          <h1>Yay!!</h1>
          <button onClick={logout}>Logout</button>
        </>
      );
    }
  } else {
    return <h1>(T_T)</h1>;
  }
};

export default Registrations;
