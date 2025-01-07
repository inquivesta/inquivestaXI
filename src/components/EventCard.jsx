import React from 'react'

const EventCard = ({eventProp}) => {
  return (
    <a href={eventProp.link == "" ? "/#/events" : eventProp.link} className="card">
        { eventProp.name }
    </a>
  )
}

export default EventCard