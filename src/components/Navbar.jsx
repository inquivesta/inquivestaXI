import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({active}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <button onClick={() => setIsOpen(!isOpen)} className="nav-btn">
      {isOpen ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars} />}
    </button>
    <nav >
        <Link className="nav-logo" to='/'>
            <img src="/logo.png"></img>
        </Link>
        <ul data-visible={isOpen ? "true" : "false" }>
            <li><Link to="/about" className={`nav-link glitch ${active == "about" ? "active" : ""}`}>About</Link></li>
            <li><Link to="/schedule" className={`nav-link glitch ${active === "schedule" ? "active" : ""}`}>Schedule</Link></li>
            <li><Link to="/events" className={`nav-link glitch ${active == "events" ? "active" : ""}`}>Events</Link></li>
            <li><Link to="/merch" className={`nav-link glitch ${active == "merch" ? "active" : ""}`}>Merch</Link></li>
            <li><Link to="/sponsors" className={`nav-link glitch ${active == "sponsors" ? "active" : ""}`}>Sponsors</Link></li>
            <li><Link to="/contact" className={`nav-link glitch ${active == "contact" ? "active" : ""}`}>Contact Us</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar