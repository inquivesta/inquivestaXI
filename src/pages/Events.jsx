import React from 'react'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard';

const Events = () => {
    const core = [
        {name: "CSI", link: ""},
        {name: "Soulbeats", link: ""},
        {name: "Headshot", link: "https://headshot-inq.vercel.app"},
        {name: "Anicon 3.0", link: "https://anicon3.github.io"},
        {name: "LOST", link: ""},
        {name: "MUN'dane", link: ""},
        {name: "GNQ", link: ""},
        {name: "Recycled Runway", link: ""},
        {name: "Photon", link: ""},
    ];
    const dramatics = [
        {name: "monodrama", link: ""},
    ];
    const science = [
        {name: "Art in a culture", link: ""},
        {name: "Bad Ad Hoc Hypothesis", link: ""},
        {name: "Mind-Meld", link: ""},
        {name: "Thrust", link: ""},
        {name: "Beat the drop", link: ""},
    ];
    const music = [
        {name: "battle of bands", link: ""},
    ];
    const sports = [
        {name: "Chess", link: ""},
        {name: "Cubing Open", link: ""},
        {name: "Futsal", link:""},
        {name: "3x3 Basketball", link:""},
    ];
  return (
    <>
    <Navbar active="events"/>
    <div className='main-content darkbg events-cont'>
        <div className="events-wrapper">
            <h1 className='event-cat glitch'>Core</h1>
            <div className="event-grid">
                {core.map((e) => (
                    <EventCard eventProp={e}/>
                ))}
            </div>
        </div>
        <div className="events-wrapper">
            <h1 className='event-cat glitch'>Science</h1>
            <div className="event-grid">
                {science.map((e) => (
                    <EventCard eventProp={e}/>
                ))}
            </div>
        </div>
        <div className="events-wrapper">
            <h1 className='event-cat glitch'>Music</h1>
            <div className="event-grid">
                {music.map((e) => (
                    <EventCard eventProp={e}/>
                ))}
            </div>
        </div>
        <div className="events-wrapper">
            <h1 className='event-cat glitch'>Dramatics</h1>
            <div className="event-grid">
                {dramatics.map((e) => (
                    <EventCard eventProp={e}/>
                ))}
            </div>
        </div>
        <div className="events-wrapper">
            <h1 className='event-cat glitch'>Sports</h1>
            <div className="event-grid">
                {sports.map((e) => (
                    <EventCard eventProp={e}/>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Events