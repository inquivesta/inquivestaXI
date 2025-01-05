import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
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
            <li><Link to="/about" className="nav-link glitch">About</Link></li>
            <li><Link to="" className="nav-link glitch">Schedule</Link></li>
            <li><Link to="/events" className="nav-link glitch">Events</Link></li>
            <li><Link to="/sponsors" className="nav-link glitch">Sponsors</Link></li>
            <li><Link to="/contact" className="nav-link glitch">Contact Us</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar