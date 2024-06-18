import React, { useState } from "react"
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
                    <img src="src/assets/main-design.webp" className="h-16"/>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li><a href="#" className="text-white">Events</a></li>
                    <li><a href="#" className="text-white">About</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
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
                <li className="py-2"><a href="#" className="text-white">Events</a></li>
                <li className="py-2"><a href="#" className="text-white">About</a></li>
                <li className="py-2"><a href="#" className="text-white">Contact</a></li>
            </ul>
            ) : null}

        </nav>   
    )
}

export default NavBar