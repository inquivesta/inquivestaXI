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
  return (
    <>
        <Fireflies />
        <Navbar active="pronites"/>
        <div className="pronites-container">
            <ArtistGroup people={headliner} category="Headliner"/>
            {/* <ArtistGroup people={webdev} category="Web Development"/> */}
            <h2 className='glitch'>Stay tuned for more surprises!!</h2>
        </div>
    </>
  )
}

export default Pronites