import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Timer from '../components/Timer'
import { ScrollRestoration } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <ScrollRestoration />
    <Navbar active=""/>
    <motion.div className="hero-section">
      <motion.img src="./logo.png" alt="" className="hero-img" 
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        viewport={{once: true}}
      />
      <h3 className='glitch'>7th to 9th February, 2025</h3>
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} transition={{ type: "spring", stiffness: 400, damping: 10 }}><Link to="/about" className='hero-link'>But What is Inquivesta?</Link></motion.div>
      <Timer/>
    </motion.div>
    </>
  )
}

export default Home