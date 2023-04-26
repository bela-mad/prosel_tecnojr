import React from 'react'
import "./Sponsors.css"
import googleIcon from './../../imagens/sponsors/google.png'
import microsoftIcon from './../../imagens/sponsors/microsoft.png'
import airbnbIcon from './../../imagens/sponsors/airbnb.png'
import axureIcon from './../../imagens/sponsors/axure.png'
import appleIcon from './../../imagens/sponsors/apple.png'
import facebookIcon from './../../imagens/sponsors/facebook.png'
import nokiaIcon from './../../imagens/sponsors/nokia.png'
import oracleIcon from './../../imagens/sponsors/oracle.png'

const Sponsors = () => {
	return (
		<div className="sponsors">
      <h2>Our Sponsors</h2>
      <div className="row">
        <div className="col">
          <img src={googleIcon} />
        </div>
        <div className="col">
          <img src={microsoftIcon} />
        </div>
        <div className="col">
          <img src={airbnbIcon} />
        </div>
        <div className="col">
          <img src={axureIcon} />
        </div>
        <div className="w-100"></div>
        <div className="col">
          <img src={appleIcon} />
        </div>
        <div className="col">
          <img src={facebookIcon} />
        </div>
        <div className="col">
          <img src={nokiaIcon} />
        </div>
        <div className="col">
          <img src={oracleIcon} />
        </div>
      </div>  
      <button type="button" className="button">Become a sponsor!</button>
    </div>
	)
}

export default Sponsors