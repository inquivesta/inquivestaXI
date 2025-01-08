import React from 'react'
import Navbar from '../components/Navbar'
import TeamGroup from '../components/TeamGroup';

const Team = () => {
    const FC =[{name: "Abhratanu Ray", links: true, insta: "abhra_ray"}];
    const EC =[{name: "Abhinandan Yadav", links: true, insta: "abhi_ydv_25_08"}];
    const finance =[
        {name: "Niravra Nag", links: true, insta:"_niravra_"}
    ]
    const webdev = [
        {name: "Debayan Sarkar", pic: "debayan.jpg", links:true, insta: "debayansarkar_", github: "TheSillyCoder", mail:"ds22ms002@iiserkol.ac.in", twitter: "thesillycoder", site: "https://thesillycoder.github.io"},
        {name: "Sattwamo Ghosh", github:"sattwamo"}
    ];
  return (
    <>
        <Navbar/>
        <div className="team-container">
            <TeamGroup people={FC} category="Fest Coordinator"/>
            <TeamGroup people={EC} category="Event Coordinator"/>
            <TeamGroup people={webdev} category="Web Development"/>
        </div>
    </>
  )
}

export default Team