var defaultForm = [
  "name", "email", "phone"
]

const dropdown = (label, naam, opts) => {
  return (
    <>
      <label htmlFor='firstCommitteePref'>{label}</label>
      <select className="dropdown" name={naam} id={naam} required>
        {opts.map((e) => (<option value={e}>{e === "" ? "Please Select an Option": e}</option>))}
      </select>
    </>)
}

var eventForms = {
   mundane: [
    ...defaultForm, 
    "institute", 
    {name: "firstCommitteePref", ele: dropdown("First Committee Preference", "firstCommitteePref", ["", "UNHRC", "UNSC", "Historic Lok Sabha", "IPC - Journalism", "IPC - Photojournalism"])}, 
    {name: "secondCommitteePref", ele: dropdown("Second Committee Preference", "secondCommitteePref", ["", "UNHRC", "UNSC", "Historic Lok Sabha", "IPC - Journalism", "IPC - Photojournalism"])}, 
    {name: "thirdCommitteePref", ele: dropdown("Third Committee Preference", "thirdCommitteePref", ["", "UNHRC", "UNSC", "Historic Lok Sabha", "IPC - Journalism", "IPC - Photojournalism"])}
  ],
  
    headshot: [...defaultForm, 
      ""
    
  ]
}

export default eventForms

