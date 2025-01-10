import React, { useState } from 'react'

const MerchImages = ({images}) => {
    const [imageIdx, setImIdx] = useState(0);
    const prev = () => {setImIdx((imageIdx - 1 + images.length) % images.length);};
    const next = () => {setImIdx((imageIdx + 1) % images.length)};
    return (
        <div className="merch-img">
            <img src={`/merch/${images[imageIdx]}`}/>
            <span className="merch-toggles">
                <span className="merch-nav merch-prev" onClick={prev}></span>
                <span className="merch-nav merch-next" onClick={next}></span>
            </span>
        </div>
    )
}

export default MerchImages