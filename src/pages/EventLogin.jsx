import {React, useEffect, useState} from 'react'

import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const EventLogin = () => {
    const [login, setlogin] = useState(false);
    const navigate = useNavigate();
  const signin = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const holder = new Object();
    for (const [name, val] of data) {
        if (["username", "password"].includes(name)) {
            holder[name] = val;
        }
    }
    try {
      const response = await fetch(import.meta.env.VITE_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(holder), // Send data as JSON
      });

      const data = await response.json();
      console.log(data["userdata"]);
      Cookies.set('inquivestaUsername', data.userdata.username, { expires: 10 });
      Cookies.set('inquivestaToken', data.userdata.token, { expires: 10 });
      alert(data["message"]);
      if (data.status) {
        setlogin(true);
        navigate("/registrations");
      }
      
    } catch (error) {
      // console.error("Error posting data:", error);
      alert("An Error Occurred. Please Try Again.")
    }
  };
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
    console.log(data.message);
    } catch (error) {
      // console.error("Error posting data:", error);
      alert("An Error Occurred. Please Try Again.")
    }
  };
  const logout = (() => {
        Cookies.remove("inquivestaUsername");
        Cookies.remove("inquivestaToken");
        window.location.reload();
  });
  useEffect(() => {
    const username = Cookies.get("inquivestaUsername");
    const sessionCookie = Cookies.get("inquivestaToken");
    if (username) {
        cookielogin(username, sessionCookie);
    }
    if (login) {
        navigate("/registrations");
    }
  }, []);
  if (login) {
    return (
        <>
            <h1>You're Already Logged In !!</h1>
            <button onClick={logout}>Logout</button>
        </>
    );

  } else {
    return (
        <form method='POST' onSubmit={signin} className='login-form-container'>
          <span className="login-wrapper">
            <span className="login-field"><label htmlFor='username'>Username</label><input name = "username" type="text" required></input> </span>
            <span className="login-field"><label htmlFor='password'>Password</label><input name = "password" type="password" required></input> </span>
            <input type='submit' value="Login"/>
          </span>
        </form>
    );
  }
}

export default EventLogin