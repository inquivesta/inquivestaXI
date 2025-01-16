import React from 'react'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard';
import { motion } from 'motion/react';
import EventsWrapper from '../components/EventsWrapper';

const Events = () => {
    const core = [
        {name: "CSI", link: ""},
        {name: "Soulbeats", link: ""},
        {name: "Headshot", register: "https://headshot-inq.vercel.app/#games", link: "https://headshot-inq.vercel.app", details:"Headshot is the premier esports extravaganza at Inquivesta XI, the flagship college fest of IISER Kolkata. Designed for gaming enthusiasts and competitive players, this electrifying event brings together popular titles like Valorant, Marvel RIVALS, BGMI, and more. Whether you’re a sharpshooter, a strategist, or a fan of fast-paced action, \"Headshot\" promises an unforgettable experience filled with adrenaline, camaraderie, and intense battles. Step into the arena, showcase your skills, and claim your place among the champions in this ultimate celebration of gaming excellence!"},
        {name: "Anicon 3.0", link: "https://anicon3.github.io", register: "https://unstop.com/o/1kIEqrg?lb=Otz3Q9l&utm_medium=Share&utm_source=shortUrl", details: ["Anicon 3.0, a vibrant highlight of Inquivesta XI is the ultimate gathering for anime enthusiasts. This exciting anime convention promises a dynamic lineup of events, including dazzling cosplay competitions, captivating musical performances, engaging karaoke sessions, challenging quizzes, and thrilling games. Whether you're a die-hard fan of all things animated media or just curious to explore this fascinating world, Anicon 3.0 offers an unforgettable experience filled with creativity, culture, and camaraderie. Join us for a day of fun, fandom, and fantastic memories! Dont forget to follow us on instagram ", <a href='https://instagram.com/anicon3.o' target='_blank'>@anicon3.o</a>, <br/> ,<strong> Note that the you only have to pay and register to attend the offline event. The online events/competitions have no registration Fees !!</strong>]},
        {name: "LOST", link: "https://xeylenol.github.io/LOST/"},
        {name: "MUN'dane", link: ""},
        {name: "GNQ", link: ""},
        {name: "Recycled Runway", link: ""},
        {name: "Photon", link: ""},
    ];
    const cultural = [
        {name: "battle of bands", link: ""},
        {name: "monodrama", link: ""},
    ];
    const science = [
        {name: "Art in a culture", link: ""},
        {name: "Bad Ad Hoc Hypothesis", register: "https://forms.gle/1aYxxsjcrTRXGqyt8", details: "Ever wanted to make claims so blasphemous that people end up executing you ? (uplifting Galilean noises). If yes, then now is the chance to come forward with the most absurd theories, to engage the audience in a light-hearted \"scientific\" talk as we are here with BAD AD-HOC HYPOTHESIS !"},
        {name: "Mind-Meld", link: ""},
        {name: "Thrust", link: ""},
        {name: "Beat the drop", link: ""},
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
        <EventsWrapper eventsArray={cultural} category="Cultural"/>
        <EventsWrapper eventsArray={sports} category="Sports"/>
    </div>
    </>
  )
}

export default Events