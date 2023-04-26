import React from 'react'
import "./Footer.css"
import logoBranca from './../../imagens/Logo_branco.png'
import facebookIcon from './../../imagens/icons/facebook_icon.png'
import twitterIcon from './../../imagens/icons/twitter_icon.png'
import linkedinIcon from './../../imagens/icons/linkedin_icon.png'
import instagramIcon from './../../imagens/icons/instagram_icon.png'

const Footer = () => {
	return (
		<footer>
      <div className="row_footer1">
        <div className="column_footer">
          <img id="logo_footer" src={logoBranca}/>
        </div>
        <div className="column_footer">
          <p></p>
        </div>
      </div>
      <div className="row_footer">
          <div className="column_footer">
          <a>HOME</a>
          <a>COMPANY</a>
          <a>BLOG</a>
          <a>CONTACT US</a>
          <a>SITEMAP</a>
          </div>
          <div className="column_footer">
          <ul className="redes_sociais">
            <li className="item">
              <img src={facebookIcon} />
            </li>
            <li className="item">
              <img src={twitterIcon} />
            </li>
            <li className="item">
              <img src={linkedinIcon} />
            </li>
            <li className="item">
              <img src={instagramIcon} />
            </li>
          </ul>
           </div>
           <div className="column_footer">
          <p id="marca_dagua">© musik.com, 2021 </p>
          </div>
      </div>
    </footer>
	)
}

export default Footer