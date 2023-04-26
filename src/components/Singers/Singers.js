import React from 'react'
import "./Singers.css"
import arrowImage from './../../imagens/icons/seta-direita(branco).png'
import image from './../../imagens/singers.png'

const Singers = () => {
	return (
		<div className="singers">
		  	<div className="row_singers">
		  		<div className="column1_singers">
		  			<div id="col1">
		  			</div>
		  			<div id="col2">
		    			<h2>Singers</h2>
		  				<p>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</p>
		  				<button type="button" className="button_singers">View All Singers  <img src={arrowImage} /></button>
		  			</div>
		  		</div>
		  		<div className="column2_singers">
				    <img id="singers" src={image} />
		  		</div>
			</div>
		</div>
	)
}

export default Singers