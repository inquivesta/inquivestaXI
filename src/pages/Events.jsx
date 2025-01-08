import React from 'react'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard';
import { motion } from 'motion/react';
import EventsWrapper from '../components/EventsWrapper';

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
        <EventsWrapper eventsArray={core} category="Core"/>
        <EventsWrapper eventsArray={science} category="Science"/>
        <EventsWrapper eventsArray={music} category="Music"/>
        <EventsWrapper eventsArray={dramatics} category="Dramatics"/>
        <EventsWrapper eventsArray={sports} category="Sports"/>
    </div>
    </>
  )
}

export default Events