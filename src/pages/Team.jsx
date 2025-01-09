import React from 'react'
import Navbar from '../components/Navbar'
import TeamGroup from '../components/TeamGroup';

const Team = () => {
    const FC =[{name: "Abhratanu Ray", links: true, insta: "abhra_ray"}];
    const EC =[{name: "Abhinandan Yadav", links: true, insta: "abhi_ydv_25_08"}];
    const finance =[
        {name: "Niravra Nag", links: true, insta:"_niravra_"},
    ];
    const sponsorships = [
        {name: "Dhruba Sinha"},
    ];
    const arena = [
        {name: "Aritra Barua", links: true, insta: "grapher__aritzz__", fb:"https://www.facebook.com/elvin.barua.5/"},
        {name: "Harsh Singh"},
    ];
    const hospitality = [
        {name: "Ruksana Taj"},
    ];
    const pr = [
        {name: "Gargi Patil"},
    ];
    const media = [
        {name: "Thejas Suresh"},
    ];

    const webdev = [
        {name: "Debayan Sarkar", pic: "debayan.jpg", links:true, insta: "debayansarkar_", github: "TheSillyCoder", mail:"ds22ms002@iiserkol.ac.in", twitter: "thesillycoder", site: "https://thesillycoder.github.io"},
        {name: "Sattwamo Ghosh", links: true, github:"sattwamo", insta: "__sattwamo__"}
    ];
  return (
    <>
        <Navbar/>
        <div className="team-container">
            <TeamGroup people={FC} category="Fest Coordinator"/>
            <TeamGroup people={EC} category="Event Coordinator"/>
            <TeamGroup people={finance} category="Finance"/>
            <TeamGroup people={sponsorships} category="Sponsorship"/>
            <TeamGroup people={pr} category="Publicity"/>
            <TeamGroup people={arena} category="Arena Team"/>
            <TeamGroup people={hospitality} category="Hospitality"/>
            <TeamGroup people={media} category="Media and Design"/>
            <TeamGroup people={webdev} category="Web Development"/>
        </div>
    </>
  )
}

export default Team