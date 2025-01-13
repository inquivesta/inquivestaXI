import React, { useState, useEffect } from 'react'

const EventCard = ({eventProp}) => {

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = (event) => {
    // event.preventDefault(); 
    setIsOpen(!isOpen);
  };


  const handleScroll = () => {
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
    <a href={eventProp.link == "" ? "/#/events" : eventProp.link} className="card" onClick={togglePopup}>
        { eventProp.name }
    </a>

    {isOpen && (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2> { eventProp.name } </h2>
          <p>Text goes here</p>
          <button className="close-popup-btn" onClick={togglePopup}>
            Close
          </button>
        </div>
      </div>
    )}
    </>
  )
}

export default EventCard