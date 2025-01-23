import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Registrations = () => {
    const [login, setlogin] = useState(false);
    const navigate = useNavigate();
  const cookielogin = async (username, cookie) => {

    const holder = {username: username, sessionCookie: cookie};
    try {
      const response = await fetch(import.meta.env.VITE_LOGIN, {
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
    setlogin(data.status);
      
    } catch (error) {
      // console.error("Error posting data:", error);
      alert("An Error Occurred. Please Try Again.")
    }
  };
  const logout = (() => {
        Cookies.remove("inquivestaUsername");
        Cookies.remove("inquivestaToken");
        navigate("/eventlogin");
  });
  useEffect(() => {
    const username = Cookies.get("inquivestaUsername");
    const sessionCookie = Cookies.get("inquivestaToken");
    if (username) {
        cookielogin(username, sessionCookie);
    }
  }, []);
  if (login) {
    return (
        <>
            <h1>Yay!!</h1>
            <button onClick={logout}>Logout</button>
        </>
)
  } else {
    return (<h1>Ono (T_T)</h1>)
  }
}

export default Registrations