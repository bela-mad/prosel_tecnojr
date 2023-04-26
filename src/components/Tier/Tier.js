import React from 'react'
import "./Tier.css"

const Tier = () => {
	return (
		<div className="tier">
      <h2>Choose a Tier that’s right for you</h2>
      <div className="row_tier">
      <div className="column_tier" id="basic">
        <h3>Basic</h3>
        <p id="price1">$100</p>
        <p><b>1 Seat Available</b></p>
        <p>Access to Wifi Router</p>
        <p>Free Food & Coffee</p>
        <button>Get Tickets</button>
      </div>
      <div className="column_tier" id="standard">
        <h3>Standard</h3>
        <p id="price2">$150</p>
        <p><b>1 Seat Available</b></p>
        <p><b>Access to Wifi Router</b></p>
        <p>Free Food & Coffee</p>
        <button>Get Tickets</button>
      </div>
      <div className="column_tier" id="premium">
        <h3>Premium</h3>
        <p id="price3">$200</p>
        <p><b>2 Seat Available</b></p>
        <p><b>Access to Wifi Router</b></p>
        <p><b>Free Food & Coffee</b></p>
        <button>Get Tickets</button>
      </div>
    </div>
  </div>
	)
}

export default Tier