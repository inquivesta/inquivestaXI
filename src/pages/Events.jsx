import React from 'react'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard';
import { motion } from 'motion/react';
import EventsWrapper from '../components/EventsWrapper';
import { link } from 'motion/react-client';

const Events = () => {
    const core = [
        {name: "CSI", register: "#/register/CSI", details: ["Dive into the thrilling world of ",<strong>C</strong>,"rime ",<strong>S</strong>,"cene ",<strong>I</strong> ,"nvestigation at INQUIVESTA, the ultimate college fest! Step into the shoes of a detective as you unravel clues, interrogate suspects, and piece together evidence to crack a mind-bending mystery. Whether you're a true-crime enthusiast or just looking for an adrenaline-packed challenge, this event promises to test your logic, teamwork, and investigative skills. Get ready to think fast, act smart, and solve the unsolvable—because the case won't crack itself! This event is meant to test your deductive skills, you can expect questions based on general science, logic, reasoning in the context of the crime scenes, it shall also test your judgement in deciphering what is the true nature of the crime and not fall for the illusions and traps in front of you."]},
        {name: "Soulbeats", link: ""},
        {name: "Headshot", register: "https://headshot-inq.vercel.app/#games", link: "https://headshot-inq.vercel.app", details:"Headshot is the premier esports extravaganza at Inquivesta XI, the flagship college fest of IISER Kolkata. Designed for gaming enthusiasts and competitive players, this electrifying event brings together popular titles like Valorant, Marvel RIVALS, BGMI, and more. Whether you’re a sharpshooter, a strategist, or a fan of fast-paced action, \"Headshot\" promises an unforgettable experience filled with adrenaline, camaraderie, and intense battles. Step into the arena, showcase your skills, and claim your place among the champions in this ultimate celebration of gaming excellence!"},
        {name: "Anicon 3.0", link: "https://anicon3.github.io", register: "https://unstop.com/o/1kIEqrg?lb=Otz3Q9l&utm_medium=Share&utm_source=shortUrl", details: ["Anicon 3.0, a vibrant highlight of Inquivesta XI is the ultimate gathering for anime enthusiasts. This exciting anime convention promises a dynamic lineup of events, including dazzling cosplay competitions, captivating musical performances, engaging karaoke sessions, challenging quizzes, and thrilling games. Whether you're a die-hard fan of all things animated media or just curious to explore this fascinating world, Anicon 3.0 offers an unforgettable experience filled with creativity, culture, and camaraderie. Join us for a day of fun, fandom, and fantastic memories! Dont forget to follow us on instagram ", <a href='https://instagram.com/anicon3.o' target='_blank'>@anicon3.o</a>, <br/> ,<strong> Note that you only have to pay and register to attend the offline event. The online events/competitions have no registration Fees !!</strong>]},
        {name: "LOST", link: "https://xeylenol.github.io/LOST/", details: ["L.O.S.T. tells the story of a space research crew, who find themselves stranded on a long-lost Earth colony.", <br/>, "Stuck with no memories of how your ship went off trajectory and crashed, you and your team must explore the desolate lands in search for answers... and a way back home. Soon you will realize that there is more to this colony than meets the eye. The air is heavy with dread, and everything seems unnatural. Uncover the source of the fleshy veins riddling the streets, that seems to be driving everyone mad. Explore the city and find a way off this godforsaken planet.",<br/> ,"Enter this treasure hunt in groups of 4, and solve puzzles all around the campus."]},
        {name: "MUN'dane", details: ["MUN’dane 2025 features a diverse range of committees addressing crucial global and national issues. The United Nations Security Council will focus on security in the Middle East, with a special emphasis on Palestine. The United Nations Human Rights Council will examine humanitarian crises in South Asia. The Historic Lok Sabha will stimulate discussions on socio-economic development in India during the 13th Lok Sabha (1999). Lastly, the International Press Corps will represent media perspectives, ensuring transparency and accountability within the conference.", <br/>, <br/>,"MUN’dane 2025 warmly welcomes students from secondary schools, higher secondary schools, and colleges to participate in this prestigious event. Delegates must present a valid student or government-issued ID during registration and throughout the conference. The dress code for the event is strictly formal or traditional attire, reflecting the professionalism and decorum expected at such a platform."], register: "#/register/mundane", brochure: "https://unstop.com/api/competition/get-attachment/6782ede3bb28c_MUNdane_2025_Brochure.pdf", link: "https://linktr.ee/mundane_iiserk"},
        {name: "GNQ", link: ""},
        {name: "Recycled Runway", link: ""},
        {name: "Photon", link: ""},
    ];
    const cultural = [
        {name: "symphonics", link: ""},
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