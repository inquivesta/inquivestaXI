import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { motion} from "motion/react"
import { ScrollRestoration } from 'react-router-dom';

const About = () => {
  return (
    <>
        <ScrollRestoration />
        <Navbar active="about"/>
        <div className="main-content">
            <div className="container-1">
              <motion.div className='about-section' 
                initial = {{scaleY: 0}}
                whileInView= {{scaleY: 1}}
              >
                  <h1>But, What is Inquivesta ?</h1>
                  <p>Inquivesta, which is hosted by the students of IISER Kolkata, is the first and one of the largest science college festivals in India. It was created in 2011 with the aim of promoting science in an entertaining and engaging manner to a wider audience. Since then, Inquivesta has successfully organized ten editions under the tagline "Being Inquisitive". These editions have included a variety of events that showcase science, technology, and innovation, as well as workshops, guest lectures, celebrity appearances, and engaging competitions in fine arts, sports, and adventure. Inquivesta attracts a diverse audience ranging from school and college students to working professionals.</p>

              </motion.div>
            </div>
        </div>
    </>
  )
}

export default About