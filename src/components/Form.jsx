import React from 'react'


const Form = ( {eventForm} ) => {
  const dropdown = (label, naam, opts) => {
    return (
      <>
        <label htmlFor='firstCommitteePref'>{label}</label>
        <select className="dropdown" name={naam} id={naam} required>
          {opts.map((e) => (<option value={e}>{e === "" ? "Please Select an Option": e}</option>))}
        </select>
      </>)
  }
  const formFields = {
    name: [<label htmlFor="name">Name</label>, <input type="text" name="name" placeholder="Name"className='text-input' required></input>],
    email: [<label htmlFor="email">Email</label>, <input type="email" name="email" placeholder="Email"className='text-input' required></input>],
    phone: [<label htmlFor="phone">Phone</label>, <input type="tel" name="phone" placeholder="Mobile Number"className='text-input' required></input>],
    institute: [<label htmlFor="name">Affliation</label>, <input className='text-input' type="text" name="institute" placeholder="Name of the institute you are currently enrolled in" required></input>],
    firstCommitteePref: dropdown("First Committee Preference", "firstCommitteePref", ["", "UNHRC", "UNSC", "Historic Lok Sabha", "IPC - Journalism", "IPC - Photojournalism"]),
    secondCommitteePref: dropdown("Second Committee Preference", "secondCommitteePref", ["", "UNHRC", "UNSC", "Historic Lok Sabha", "IPC - Journalism", "IPC - Photojournalism"]),
    thirdCommitteePref: dropdown("Third Committee Preference", "thirdCommitteePref", ["", "UNHRC", "UNSC", "Historic Lok Sabha", "IPC - Journalism", "IPC - Photojournalism"]),
  }

  return (
    <>
        {eventForm? eventForm.map((e) => <span className="form-group">{formFields[e]}</span>):""}
    </>
  )
}

export default Form