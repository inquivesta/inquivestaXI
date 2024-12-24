import React from 'react'
import Navbar from '../components/Navbar'
import PastSponsors from "../components/PastSponsors"

const Sponsors = () => {
    const sponsorsList = [
        { name: 'Title Sponsor', logo: "sbi.jpg", size: 'large' },   
        { name: 'Logistics Partner', logo: "dtdc.jpg", size: 'small' }, 
        { name: 'Web Partner', logo: "moz.jpg", size: 'small' },   
        { name: 'Mall & Lifestyle Partner', logo: "mani.jpg", size: 'large' },   
        { name: 'Furnishing Partner', logo: "godrej.gif", size: 'small' },   
        { name: 'Beverage Partner', logo: "ccd.png", size: 'small' },   
        { name: 'Arena Partner', logo: "inno.png", size: 'small' },   
        { name: 'Airline Partner', logo: "jet.png", size: 'small' },   
        { name: 'Pizza Partner', logo: "dom.jpg", size: 'large' },   
        { name: 'Online Shopping Partner', logo: "ebay.jpg", size: 'small' },   
        { name: 'Refreshment Partner', logo: "para.jpg", size: 'small' },   
        { name: 'Dining Partner', logo: "spice.jpg", size: 'small' },   
        { name: 'Digital Accessories Partner', logo: "tech.png", size: 'small' },   
        { name: 'Production Partner', logo: "voice.jpg", size: 'small' },   
        { name: 'Events Sponsor', logo: "sug.png", size: 'small' },   
        { name: 'Events Sponsor', logo: "bruk.jpg", size: 'large' },   
        { name: 'Lab Instrumentation Partner', logo: "ika.png", size: 'large' },   
        { name: 'Event Sponsor', logo: "red.png", size: 'large' }, 
      ];
  return (
    <>
    <Navbar/>
    <div className="sponsors">
        <PastSponsors sponsors={sponsorsList}/>
      </div>
    </>
  )
}
export default Sponsors