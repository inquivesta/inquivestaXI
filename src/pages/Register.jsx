import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form.jsx";
import Navbar from "../components/Navbar.jsx";
// import eventForms from "../data/eventData.jsx";

var defaultForm = [
  "name", "email", "phone"
]

const dropdown = (label, naam, opts, handleOnChange) => {
  return (
    <>
      <label htmlFor='placeholder'>{label}</label>
      <select className="dropdown" name={naam} id={naam} required onChange={(e) => {handleOnChange( e.target.id, e.target.value)}}>
        {opts.map((e) => (<option value={e}>{e === "" ? "Please Select an Option": e}</option>))}
      </select>
    </>)
}

const radio = (label, name, options) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="radio">
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`${name}-${index}`}
              name={name}
              value={option}
              // onChange={handleOnChange(name, option)}
              required
            />
            <label htmlFor={`${name}-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </>
  );
};

const Register = () => {

  const [eventName, setEventName] = useState("");
  const [dropdownValues, setDropdownValues] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href.split("/");
    const eventKey = url[url.length - 1];
    setEventName(eventKey);
  }, []);

  const changeDropDown = (name, value) => {
    setDropdownValues((prevValues) => ({
      ...prevValues, 
      [name]: value, 
    }));

  }

  var eventForms = {
    mundane: [
     ...defaultForm, 
     "institute", 
     {name: "delegation", ele: radio("Mode of attendance", "delegation", ["Single Delegation", "Double Delegation"])},
     {name: "firstCommitteePref", ele: dropdown("First Committee Preference", "firstCommitteePref", ["", "UNHRC", "UNSC", "Historic Lok Sabha", "IPC - Journalism", "IPC - Photojournalism"], changeDropDown)}, 
     {name: "secondCommitteePref", ele: dropdown("Second Committee Preference", "secondCommitteePref", ["", "UNHRC", "UNSC", "Historic Lok Sabha", "IPC - Journalism", "IPC - Photojournalism"], changeDropDown)}, 
     {name: "thirdCommitteePref", ele: dropdown("Third Committee Preference", "thirdCommitteePref", ["", "UNHRC", "UNSC", "Historic Lok Sabha", "IPC - Journalism", "IPC - Photojournalism"], changeDropDown)},
     {name: "newsIPC", renderOn: "IPC", ele: dropdown("News Agency Preference for IPC (-P)", "newsIPC", ["", "News Channel", "BBC News (UK)", "CNN (USA)", "Al Jazeera (Qatar)", "Sky News (UK)", "Fox News (USA)", "MSNBC (USA)", "ABC News (USA)", "CBS News (USA)", "NBC News (USA)", "Euronews (France)", "France 24 (France)", "Deutsche Welle (Germany)", "RT (Russia)", "NHK World (Japan)", "CCTV News (China)", "CGTN (China)", "Channel NewsAsia (Singapore)", "India Today (India)", "NDTV (India)", "Republic TV (India)", "WION (India)", "The Times of India (India)", "The Hindu (India)", "Zee News (India)", "CNN-News18 (India)", "Aaj Tak (India)", "Al Arabiya (UAE)", "Arirang TV (South Korea)", "YTN (South Korea)", "SBS News (Australia)", "ABC News (Australia)", "Nine News (Australia)", "CBC News (Canada)", "CTV News (Canada)", "Global News (Canada)", "TeleSUR (Venezuela)", "GloboNews (Brazil)", "BandNews TV (Brazil)", "RAI News 24 (Italy)", "Mediaset TGCOM24 (Italy)", "La7 (Italy)", "RTVE (Spain)", "Antena 3 (Spain)", "TVE (Spain)", "ATV (Hungary)", "RUV (Iceland)", "TV2 (Denmark)", "NRK (Norway)", "SVT (Sweden)", "TV4 (Sweden)", "NOS (Netherlands)", "VRT (Belgium)", "RTL (Luxembourg)", "ORF (Austria)", "SRF (Switzerland)", "TV5Monde (France)", "BFM TV (France)", "RTS (Switzerland)", "TVN24 (Poland)", "TVP Info (Poland)", "NTV (Turkey)", "TRT World (Turkey)", "TV3 (Ireland)", "RTÉ News (Ireland)", "LBCI (Lebanon)", "OTV (Lebanon)", "i24 News (Israel)", "Channel 12 (Israel)", "KBS News (South Korea)", "TV Asahi (Japan)", "TV Tokyo (Japan)", "MBC (South Korea)", "SBC (Saudi Arabia)", "CNA (Taiwan)", "SET News (Taiwan)", "BTV (Bulgaria)", "Nova TV (Bulgaria)", "ERT (Greece)", "ANT1 (Greece)", "LRT (Lithuania)", "LSM (Latvia)", "ERR (Estonia)", "HRT (Croatia)", "RTL Klub (Hungary)", "MTVA (Hungary)", "BNR (Bulgaria)", "Telesur (Colombia)", "Caracol TV (Colombia)", "RCN TV (Colombia)", "ATV (Peru)", "América Televisión (Peru)", "TVN (Chile)", "Mega (Chile)", "Canal 13 (Chile)", "Canal N (Peru)", "TV Azteca (Mexico)", "Televisa (Mexico)", "TV Pública (Argentina)", "Todo Noticias (Argentina)", "SABC News (South Africa)"])},
     {name: "constituencyHLS", renderOn: "Historic Lok Sabha", ele: dropdown("Constituency Preference for Historic Lok Sabha", "constituencyHLS", ["", "Lucknow", "Gandhinagar", "Hazaribagh", "Allahabad", "Guna", "Bellary", "Pilibhit", "Godhra", "Bhopal", "Madhubani", "Gorakhpur", "Vidisha", "Indore", "Gurdaspur", "Jaunpur", "Amethi", "Dausa", "Behrampore", "Chhidwara", "Kaliabor", "Mayiladuturi", "Mumbai North West", "Khozikode", "Kanara", "Nagaland", "Dindigul", "Rasipuram", "Bolpur", "Khammam", "Jhargram", "Panskura", "Midnapore", "Nalanda", "Barh", "Sambhal", "Kannauj", "Rajapur", "Mumbai North Central", "Calcutta South", "Calcutta North East", "Vellore", "Chengalpattu", "Kurnool", "Siddipet", "Hajipur", "Madhepura", "Tarntaran", "Hissar", "Baramati", "Srinagar", "Chennai South", "Hyderabad", "Baghpat", "Ballia", "Autnonomou District (ST)", "Bhubaneshwar", "Kozhikode", "Chandel", "Idukki", "Akola"])}
   ],
   
     headshot: [...defaultForm, 
       ""
     
   ]
 }
 

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
              <Form eventForm={eventForms[eventName]} rendering={Object.values(dropdownValues)} />
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
