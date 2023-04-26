import React from 'react'

import NavbarRosa from '../../components/NavbarRosa/NavbarRosa'
import Footer from '../../components/Footer/Footer'
import emManutencaoImage from './../../imagens/em_construcao.png'

import "./EmManutencao.css"

const EmManutencao = () => {
	return (
		<>
			<NavbarRosa />
			<div className="em-construcao">
				<img id="img_emconstrucao" src={emManutencaoImage} alt="Em construção" />
		    	<p>
			    	Está página está em construção! <br />
			    	Continue nos acompanhando para mais atualizações e novidades musikais :)
			    </p>
			</div>
			<Footer />
		</>
	)
}

export default EmManutencao