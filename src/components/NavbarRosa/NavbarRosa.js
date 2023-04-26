import React from 'react'
import { Link } from 'react-router-dom'

import logoBranca from "./../../imagens/Logo_branco.png"
import downArrowImage from "./../../imagens/icons/seta-baixo(branca).png"

import "./NavbarRosa.css"

const NavbarRosa = () => {
	return (
		<header>
		  	  <nav className="navbarRosa">
				    <Link to={`/`} className="brandRosa">
				       	<img src={logoBranca}  alt="Logo da Musik" />
				    </Link>
				    <div className="navbar-navRosa">
					    <ul>
					        <li className="item_navbarRosa">
					        	<Link to={`/`}>
					          		<b>HOME</b>
					          	</Link>
					        </li>
					        <li className="dropdown">
					        	<Link to={`/manutencao`}>
						    	  	<b>SPEAKERS<img src={downArrowImage} /></b>
						    	</Link>
									<div className="dropdown-content">
									<p>*-*-*-*-*-*-*</p>
									<p>*-*-*-*-*-*-*</p>
									</div>
								
						    </li>
							<li className="dropdown">
					    	    <Link to={`/manutencao`}>
						    	    <b>SCHEDULE<img src={downArrowImage} /></b>
									    <div className="dropdown-content">
									    <p>*-*-*-*-*-*-*</p>
									    <p>*-*-*-*-*-*-*</p>
									    </div>
								</Link>
							</li>
							<li className="item_navbar">
								<Link to={`/manutencao`}>
					            	<b>CONTACT US</b>
					            </Link>
					        </li>
							<li>
					            <form className="form-inline">
					            	<Link to={`/compra`}>
					            		<button className="btn buttonRosa" type="submit"><b>GET TICKETS</b></button>
					            	</Link>
						        </form>
						    </li>
						</ul>
				    </div>
			  </nav>
 		</header>
	)
}

export default NavbarRosa