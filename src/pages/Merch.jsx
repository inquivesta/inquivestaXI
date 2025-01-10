import React from 'react'
import Navbar from '../components/Navbar.jsx'
import MerchImages from '../components/MerchImages.jsx';

const Merch = () => {
    const merch = [
        {title: "Butterfly Hoodie", images: ["default-front.png", "default-back.png", "default-design.png"]},
        {title: "Butterfly Hoodie", images: ["default-front.png", "default-back.png", "default-design.png"]},
        {title: "Butterfly Hoodie", images: ["default-front.png", "default-back.png", "default-design.png"]},
        {title: "Butterfly Hoodie", images: ["default-front.png", "default-back.png", "default-design.png"]},
        {title: "Butterfly Hoodie", images: ["default-front.png", "default-back.png", "default-design.png"]},
    ];
    const showMerch = false;
  return (
    <>
        <Navbar active="merch"/>
        <div className="merch-container">
            {showMerch ? 
            <div className="merch-wrapper">
                {
                    merch.map((e, i) => (
                        <div className="merch-card" key={i}>
                            <span className="merch-title">{e.title}</span>
                                {/* <img src={e.image ? e.image : "/merch/default.png"} alt={e.title}/> */}
                                <MerchImages images={e.images} />
                            <a className="merch-btn" href={e.link ? e.link : "/#/merch"}>Order</a>
                        </div>
                    ))
                }
            </div>
            : <h1 className="merch-placeholder">Will be Available Soon!!</h1> }
        </div>
    </>
  )
}

export default Merch