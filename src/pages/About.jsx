import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { motion} from "motion/react"

const About = () => {
  return (
    <>
        <Navbar active="about"/>
        <div className="main-content">
            {/* <div className="container-1">
              <motion.div className='about-section'
                initial = {{scaleX: 0}}
                whileInView= {{scaleX: 1}}
              >
                  <h1>How It all Started</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tenetur iste quibusdam impedit aperiam, debitis minima, eligendi nihil illo explicabo rerum? Dolorem perspiciatis doloremque voluptate laborum pariatur aliquam saepe consequuntur quasi libero. Enim maiores, sed totam dignissimos aspernatur repudiandae fugit molestias harum repellendus, odit dolore omnis sint perferendis modi consectetur earum? Voluptatem sed hic, obcaecati numquam vel, inventore odit libero nemo qui, fugit velit. Provident, architecto quasi? Enim delectus ut consequatur quae quis recusandae reiciendis dicta id, ipsum optio assumenda omnis veniam doloremque incidunt modi minima aut, reprehenderit nostrum. Sapiente culpa soluta consectetur aspernatur, debitis autem fugiat perferendis veritatis quae.</p>

              </motion.div>
            </div> */}
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