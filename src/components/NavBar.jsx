import React, { useState } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const navMenuOpen = <FontAwesomeIcon icon={faBars} />
const navMenuClose = <FontAwesomeIcon icon={faX} />

function NavBar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }  
    
    return (
        <nav className="sticky top-0 mx-auto z-40 w-full border-gray-500 p-8">
            
            {/* Main Nav */}
            <div className="flex items-center justify-between">
                <div className="text-white text-2xl font-bold"> 
                    <Link to="/"><img src="src/assets/main-design.webp" className="h-16"/></Link>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li><Link to="/event" className="text-white">Events</Link></li>
                    <li><Link to="/about" className="text-white">About</Link></li>
                    <li><Link to="/contact" className="text-white">Contact</Link></li>
                </ul>

                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                    {isMenuOpen ? navMenuClose : navMenuOpen}
                    </button>
                </div>
            </div>


            {/* Mob Nav */}
            {isMenuOpen ? (
                <ul className="grid md:hidden justify-items-center">
                <li className="py-2"><Link to="/event" className="text-white">Events</Link></li>
                <li className="py-2"><Link to="/about" className="text-white">About</Link></li>
                <li className="py-2"><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
            ) : null}

        </nav>   
    )
}

export default NavBar