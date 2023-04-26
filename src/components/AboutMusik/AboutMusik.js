import React from 'react'
import "./AboutMusik.css"
import image from "./../../imagens/about_musik.png"
import arrowImage from "./../../imagens/icons/seta-direita(branco).png"

const AboutMusik = () => {
	return (
		<div className="aboutmusik">
		  	<div className="row_musik">
		  		<div className="column_musik">
				    <img id="img_musik" src={image} />
		  		</div>
		  		<div className="column_musik">
		    		<h2>About Musik</h2>
		  			<p>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</p>
		  			<button type="button" className="button_musik">Learn More <img src={arrowImage} /></button>
		  		</div>
			</div>
		</div>
	)
}

export default AboutMusik
