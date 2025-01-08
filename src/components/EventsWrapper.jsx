import React from 'react'
import { motion } from 'motion/react'
import EventCard from './EventCard'

const EventsWrapper = ({eventsArray, category}) => {
  return (
        <motion.div className="events-wrapper"
            initial = {{scaleX: 0}}
            whileInView= {{scaleX: 1}}
            viewport={{once: true}}
        >
            <h1 className='event-cat glitch'>{category}</h1>
            <div className="event-grid">
                {eventsArray.map((e) => (
                    <EventCard eventProp={e}/>
                ))}
            </div>
        </motion.div>
  )
}

export default EventsWrapper