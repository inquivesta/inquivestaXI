import React from 'react'
import { motion } from 'motion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TeamGroup = ({people, category}) => {
  return (
    <div className="team-group">
      <h1 className="team-cat">{category}</h1>
      <div className="team-grid">
        {
          people.map((person) => (
              <motion.div className="team-card"
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
              >
                <div className="team-image" style={{backgroundImage: `url(/team/${person.pic ? person.pic : "defaut.jpg"}`}}>
              </div>
              <span className="team-name">{person.name}</span>
              {person.role ? <span className='team-role'>{person.role}</span> : ""}
              {person.links ? <span className="team-links">
                {person.mail ? <a href={`mailto:${person.mail}`} className='team-link'><i className="fa-solid fa-envelope" /></a> : ""}
                {person.phone ? <a href={`tel:${person.phone}`} className='team-link'><i className="fa-solid fa-phone" /></a> : ""}
                {person.insta ? <a href={`https://instagram.com/${person.insta}`} className='team-link'><i className="fa-brands fa-instagram" /></a> : ""}
                {person.fb ? <a href={person.fb} className='team-link'><i className="fa-brands fa-facebook" /></a> : ""}
                {/* {person.twitter ? <a href={`https://x.com/${person.twitter}`} className='team-link'><i className="fa-brands fa-twitter" /></a> : ""} */}
                {person.github ? <a href={`https://github.com/${person.github}`} className='team-link'><i className="fa-brands fa-github" /></a> : ""}
                {person.site ? <a href={person.site} className='team-link'><i class="fa-solid fa-globe"></i></a> : ""}
              </span> : ""}
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default TeamGroup