import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { details } from "motion/react-client";

const schedule = [
  {
    event: "February 7",
    time: "Friday",
    location: "RNT"
  },
  { 
    event: "Opening Ceremony", 
    time: "10:00 am", 
    details: "RNT Auditorium", 
    location: "RNT" 
  },
  { 
    event: "MUN'dane", 
    time: "02:00 pm", 
    details: "LHC G06", 
    location: "LHC"
  },
  { 
    event: "Headshot", 
    time: "02:00 pm",
    details: "LHC G08", 
    location: "LHC" 
  },
  { 
    event: "Guest Lectures", 
    time: "02:00 pm", 
    details: "MN Saha Audi", 
    location: "TRC"  
  },
  { 
    event: "Soulbeats", 
    time: "02:00 pm", 
    details: "RNT Auditorium", 
    location: "RNT" 
  },
  {
    event: "Art In A Culture",
    time: "02:00 pm",
    details: "Teaching Lab",
    location: "RC",
  },
  {
    event: "Futsal",
    time: "03:00 pm",
    details: "Football Ground",
    location: "G"
  },
  {
    event: "3V3 Basketball",
    time: "03:00 pm",
    details: "Basketball Court",
    location: "G"
  },
  {
    event: "Nukkad Natak",
    time: "03:00 pm",
    details: "Yet to be Decided",
    location: "",
  },
  {
    event: "Prom Night",
    time: "09:00 pm",
    details: "LHC Courtyard",
    location: "LHC"
  },
  {
    event: "February 8",
    time: "Saturday",
    location: "RNT",
  },
  {
    event: "MUN'dane",
    time: "09:00 am",
    location: "LHC",
    details: "LHC G06",
  },
  {
    event: "Headshot",
    time: "09:00 am",
    location: "LHC",
    details: "LHC G02, G08",
  },
  {
    event: "CSI",
    time: "09:00 am",
    location: "LHC",
    details: "LHC & Other Places"
  },
  {
    event: "Futsal",
    time: "09:00 am",
    details: "Football Ground",
    location: "G"
  },
  {
    event: "3V3 Basketball",
    time: "09:00 am",
    details: "Basketball Court",
    location: "G"
  },
  {
    event: "Recycled Runway",
    time: "10:00 am",
    details: "Road b/w ICVS and LHC",
    location: "",
  },
  {
    event: "Anicon",
    time: "10:00 am",
    details: "RNT Auditorium",
    location: "RNT",
  },
  {
    event: "Chess",
    time: "10:00 am",
    details: "SAC Building",
    location: "SAC",
  },
  {
    event: "Symphonix",
    time: "10:00 am",
    details: "Open Air Stage",
    location: "OAS",
  },
  {
    event: "GNQ",
    time: "10:00 am",
    details: "LHC 107",
    location: "LHC",
  },
  {
    event: "Art In A Culture",
    time: "10:00 am",
    details: "Teaching Lab",
    location: "RC",
  },
  {
    event: "Beat The Drop",
    time: "10:00 am",
    details: "LHC Cafe",
    location: "LHC",
  },
  {
    event: "Soulbeats Workshop",
    time: "12:00 pm",
    details: "Dance Room",
    location: "SAC",
  },
  { 
    event: "Guest Lectures", 
    time: "02:00 pm", 
    details: "MN Saha Audi", 
    location: "TRC"  
  },
  {
    event: "Bad Ad Hoc",
    time: "03:00 pm",
    details: "LHC G05",
    location: "LHC",
  },
  {
    event: "ProNite",
    time: "08:30 pm",
    details: "Open Air Stage",
    location: "OAS",
  },
  {
    event: "February 9",
    time: "Sunday",
    location: "RNT",
  },
  {
    event: "MUN'dane",
    time: "09:00 am",
    details: "LHC G06",
    location: "LHC",
  },
  {
    event: "CSI",
    time: "09:00 am",
    details: "LHC & Other Places",
    location: "LHC"
  },
  {
    event: "LOST",
    time: "09:00 am",
    details: "LHC & Other Places",
    location: "LHC",
  },
  {
    event: "Cubing",
    time: "10:00 am",
    details: "MN Saha Audi",
    location: "TRC",
  },
  {
    event: "MonoDrama",
    time: "10:00 am",
    details: "RNT Auditorium",
    location: "RNT",
  },
  {
    event: "Panel Discussion",
    time: "10:30 am",
    details: "Open Air Stage",
    location: "OAS"
  },
  {
    event: "Thrust",
    time: "11:00 am",
    details: "Football Ground",
    location: "G",
  },
  {
    event: "Headshot",
    time: "01:00 pm",
    details: "Open Air Stage",
    location: "OAS",
  },
  {
    event: "Mind Meld",
    time: "02:00 pm",
    details: "LHC 110",
    location: "LHC",
  },
  {
    event: "Photon",
    time: "02:00 pm",
    details: "Asima Chatterjee Audi",
    location: "TRC",
  },
  {
    event: "Paradigm",
    time: "02:00 pm",
    details: "LHC G05",
    location: "LHC",
  },
  {
    event: "Funnygma",
    time: "05:00 pm",
    details: "RNT Auditorium",
    location: "RNT",    
  },
  {
    event: "ProNite",
    time: "08:00 pm",
    details: "Open Air Stage",
    location: "OAS",
  }
];

const locationList = [
  {
    name: "RNT",
    position: { x: "75%", y: "10%" },
  },
  {
    name: "LHC",
    position: { x: "77%", y: "40%" },
  },
  {
    name: "OAS",
    position: { x: "55%", y: "57%" },
  },
  {
    name: "G",
    position: { x: "35%", y: "69%" },
  },
  {
    name: "SAC",
    position: { x: "24%", y: "76%" }, 
  },
  {
    name: "TRC",
    position: { x: "79%", y: "56%" },
  },
  {
    name: "RC",
    position: { x: "90%", y: "60%" },
  },
];

const Timeline = () => {
  

  const [selectedEvent, setSelectedEvent] = useState(schedule[0]);
  const [location, setLocation] = useState("RNT");

  return (
    <>
    <Navbar active="schedule"/>
    <div className="page-container">
      <div className="timeline-container">
        <div className="timeline">
          {schedule.map((event, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              onClick={() => {setSelectedEvent(event); setLocation(event.location)}} 
            >
              <div className={`event-content ${event.event.includes("February") ? "feb" : ""}`}>
                <h2>{event.event}</h2>
                <h3>{event.time}</h3>
                <p>{event.details}</p>
              </div>
              <div className="timeline-circle"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="custom-map-container">
        <h1>Event Location</h1>
        <div className="custom-map">
          {/* Map Background Image */}
          <img src="/maps.png" alt="Custom Map" className="map-image" />

          {/* Markers */}
          {locationList.map((loc, index) => (
            <div
              key={index}
              className={`map-marker ${location === loc.name ? "active" : ""}`}
              style={{ top: loc.position.y, left: loc.position.x }}
            >
              <span>{loc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Timeline;
