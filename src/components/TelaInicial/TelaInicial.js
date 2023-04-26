import React from 'react'
import "./TelaInicial.css"
import playIcon from "./../../imagens/icons/play_icon.png"
import imgInicio from "./../../imagens/img_inicio.png"

const TelaInicial = () => {
	return (
		<div className="inicio" style={{ backgroundImage:`url(${imgInicio})` }}>
		    <h1>The Best Experience Of <b id="marked">Music</b> in 2021</h1>
		    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.</p>
		    <ul className="buttons">
		    	<li>
				    <button type="button" id="button1">Get Started</button>
				  </li>
				  <li>
				    <button type="button" id="button2"><img src={playIcon} />Watch Video</button>
			    </li>
		    </ul>
		    <span id="demo"></span>
		</div>
	)
}

export default TelaInicial