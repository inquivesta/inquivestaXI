import React from 'react'

const PastSponsors = ({ sponsors }) => {
  return (
    <div>
      <h1 id="past-sponsors" className='text-4xl text-white text-center mt-10'>Past Sponsors</h1>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <div key={index} className={`sponsor-tile ${sponsor.size}`}>
            <img src={`/sponsors/${sponsor.logo}`} alt={`Sponsor ${index}`} className="sponsor-image" />
            <div className="sponsor-info">
              <h3>{sponsor.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastSponsors