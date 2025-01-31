import React from 'react'
import { motion } from 'motion/react'

const ArtistGroup = ({people, category}) => {
  return (
    <div className="team-group">
      {/* <h1 className="team-cat">{category}</h1> */}
      <div className="team-grid">
        {
          people.map((person) => (
              <motion.div className="artist-card"
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
              >
                <div className="artist-image" style={{backgroundImage: `url(/pronites/${person.pic ? person.pic : "defaut.jpg"}`}}>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default ArtistGroup