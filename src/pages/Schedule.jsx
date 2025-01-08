import React from 'react'
import { motion } from 'motion/react'
import Navbar from '../components/Navbar'

const Schedule = () => {
  return (
    <>
        <Navbar active="schedule"/>
        <motion.div className='schedule-container'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
        >
            <h1>Will be Announced Soon!</h1>
        </motion.div>
    </>
  )
}

export default Schedule