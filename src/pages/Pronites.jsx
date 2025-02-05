import React from 'react'
import Navbar from '../components/Navbar'
import TeamGroup from '../components/TeamGroup';
import Fireflies from '../components/Fireflies';
import ArtistGroup from '../components/ArtistGroup';
import { color } from 'motion/react';

const Pronites = () => {
    const headliner = [
        {name: "Mohammed Irfan", pic: "MI.png"}
    ];
    const day2 = [
        {name: "Waves in Town", pic: "band.png"},
        {name: "Frozt", pic: "dj.png"},
    ];
  return (
    <>
        <Fireflies />
        <Navbar active="pronites"/>
        <div className="pronites-container">
            <ArtistGroup people={headliner} category="Headliner"/>
            <ArtistGroup people={day2} category="Headliner"/>
            {/* <ArtistGroup people={webdev} category="Web Development"/> */}
            <a className="merch-btn" href="#/events">Event Registrations</a>
            {/* <h2 className='glitch'>Stay tuned for more surprises!!</h2> */}
        </div>
    </>
  )
}

export default Pronites