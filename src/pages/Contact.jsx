import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <>
    <Navbar active="contact"/>
    <div className='contact-container'>
        <h1 className="glitch">Contact Info</h1>
        <div class="contact-links">
            <a href="mailto:inquivesta@iiserkol.ac.in" target='_blank' class="contact-link">
                <i class="fa-solid fa-envelope"></i> <p>inquivesta@iiserkol.ac.in</p>
            </a>
            <a href="https://www.instagram.com/inquivesta_iiserk/" target='_blank' class="contact-link">
                <i class="fa-brands fa-instagram"></i> <p>@inquivesta_iiserk</p>
            </a>
            <span class="contact-link">
                <i class="fa-solid fa-phone"></i> <p className="hoverable" >+91 81786 88948</p>
            </span>
        </div>
        <div className="map">
            <h1 className="glitch">How to reach us? </h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4185.450937204947!2d88.5219273757348!3d22.963846818516434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf0ebd68bc8b%3A0x92d423474389ff5c!2sIndian%20Institute%20of%20Science%20Education%20and%20Research%20Kolkata%20(IISER%20Kolkata)!5e1!3m2!1sen!2sin!4v1735133525785!5m2!1sen!2sin" width="400" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default Contact