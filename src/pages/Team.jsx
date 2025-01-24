import React from 'react'
import Navbar from '../components/Navbar'
import TeamGroup from '../components/TeamGroup';

const Team = () => {
    const FC =[{name: "Abhratanu Ray", links: true, insta: "abhra_ray", pic: "abhra.jpg", mail: "ar22ms052@iiserkol.ac.in"}];
    const EC =[{name: "Abhinandan Yadav", links: true, insta: "abhi_ydv_25_08", pic: "abhinandan.jpg", mail: "ay22ms074@iiserkol.ac.in"}];
    const finance =[
        {name: "Niravra Nag", links: true, insta:"_niravra_", pic: "niravra.jpg", mail: "nn22ms072@iiserkol.ac.in"},
    ];
    const sponsorships = [
        {name: "Dhruba Sinha", pic: "dhruba.jpg", links: true, mail: "ds22ms194@iiserkol.ac.in"},
    ];
    const arena = [
        {name: "Harsh Singh", pic: "harsh.jpg", links: true, insta: "harsh_singh819", mail: "hs21ms124@iiserkol.ac.in"},
        {name: "Aritra Barua", links: true, insta: "grapher__aritzz__", fb:"https://www.facebook.com/elvin.barua.5/", pic: "aritra.jpg", mail: "ab22ms058@iiserkol.ac.in"},
    ];
    const hospitality = [
        {name: "Ruksana Taj", pic: "ruksana.jpg", links: true, mail: "rt22ms223@iiserkol.ac.in", insta: "ruksna_taj"},
    ];
    const pr = [
        {name: "Gargi Patil", pic: "gargi.jpg", links: true, mail:"pgm22ms174@iiserkol.ac.in", insta: "admin_is_my_kryptonite"},
    ];
    const media = [
        {name: "Thejas Suresh", pic: "thejas.jpg", links: true, insta: "thejas.pxl", mail: "ts22ms021@iiserkol.ac.in"},
    ];

    const webdev = [
        {name: "Sattwamo Ghosh", links: true, github:"sattwamo", insta: "__sattwamo__", pic: "sattwamo.jpg", mail: "sg21ms204@iiserkol.ac.in"},
        {name: "Debayan Sarkar", pic: "deb.jpg", links:true, insta: "debayansarkar_", github: "TheSillyCoder", mail:"ds22ms002@iiserkol.ac.in", twitter: "thesillycoder", site: "https://thesillycoder.github.io"},
    ];
  return (
    <>
        <Navbar active="team"/>
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