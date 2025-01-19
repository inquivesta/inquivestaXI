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
    <div href={eventProp.link == "" ? "/#/events" : eventProp.link} className="card" onClick={togglePopup}>
        { eventProp.name }
    </div>

    {isOpen && (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2> { eventProp.name } </h2>
          <p>{eventProp.details ? eventProp.details : "Details to be Added"}</p>
          <span className='popup-buttons'>
          { 
            eventProp.link ?
            <a className="close-popup-btn" href={eventProp.link} target='_blank'>
              Website
            </a>
            : ""
          }
          {
            eventProp.register ?
            <a className="close-popup-btn" href={eventProp.register} target='_blank'>
              Register
            </a>
            : ""
          }
          {
            eventProp.brochure ?
            <a className="close-popup-btn" href={eventProp.brochure} target='_blank'>
              Brochure
            </a>
            : ""
          }
          <button className="close-popup-btn" onClick={togglePopup}>
            Close
          </button>
          </span>
        </div>
      </div>
    )}
    </>
  )
}

export default EventCard