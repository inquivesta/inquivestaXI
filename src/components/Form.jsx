import React, { useEffect } from 'react'


const Form = ( {eventForm, rendering} ) => {

  const formFields = {
    name: [<label htmlFor="name">Name</label>, <input type="text" name="name" placeholder="Name"className='text-input' required></input>],
    email: [<label htmlFor="email">Email</label>, <input type="email" name="email" placeholder="Email"className='text-input' required></input>],
    phone: [<label htmlFor="phone">Phone</label>, <input type="tel" name="phone" placeholder="Mobile Number"className='text-input' required></input>],
    institute: [<label htmlFor="name">Affliation</label>, <input className='text-input' type="text" name="institute" placeholder="Name of the institute you are currently enrolled in" required></input>],
  }

  return (
    <>
        {eventForm ? eventForm.map((e) => (
          !e.renderOn ? <span className="form-group">{e.name ? e.ele : formFields[e]}</span> : (rendering.some(item => item.includes(e.renderOn)) ? <span className="form-group">{e.ele}</span> : <span></span>)
          )):""}
    </>
  )
}

export default Form