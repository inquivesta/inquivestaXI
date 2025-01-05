import React from 'react'

const CurrentSponsors = ({ sponsors }) => {
  return (
    <div>
      <h1 id="current-sponsors" className='current-sponsors'>Sponsors</h1>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <div key={index} className={`sponsor-tile ${sponsor.size}`}>
            <img src={`/sponsors/${sponsor.logo}`} alt={`Sponsor ${index}`} className="sponsor-image"/>
            <div className="sponsor-info">
              <h3>{sponsor.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentSponsors