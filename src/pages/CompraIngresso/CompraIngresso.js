import React from 'react'

import NavbarRosa from '../../components/NavbarRosa/NavbarRosa'
import Footer from '../../components/Footer/Footer'

import "./CompraIngresso.css"

const CompraIngresso = () => {
	return (
		<>
			<NavbarRosa />

			<form className="compraIngresso">
				<h2>Buying Tickets</h2>
				<div className="row_ingresso">
					<div className="column_ingresso">
					    <div className="form-outline">
					        <input type="text" id="form1" className="form-control" />
					        <label className="form-label" >Name</label>
					    </div>
					</div>
					<div className="column_ingresso">
				    	<div className="form-outline">
						    <input type="email" id="form2" className="form-control" />
						    <label className="form-label" >Email address</label>
				    	</div>
				  	</div>
				</div>

				<div className="row_ingresso">
					<div className="column_ingresso">
						<div className="form-outline">
						    <input type="text" id="form3" className="form-control" />
						    <label className="form-label" >Promotional Code</label>
				    	</div>
					</div>
					<div className="column_ingresso">
						<div className="form-outline">
						    <input type="text" id="form4" className="form-control" />
						    <label className="form-label" >Artist - Day X</label>
				    	</div>
					</div>
				</div>
				<div className="row_ingresso">
					<div className="column_ingresso">
						<p>Subtotal: R$0,00</p>
					</div>
					<div className="column_ingresso">
						<p>Código: 123456</p>
					</div>
					<div className="column_ingresso">
						<p>Lugar: B 54</p>
					</div>
				</div>
				<div className="buttonIngresso">
					<button id="buttonIngresso">Submit</button>
				</div>
			</form>

			<Footer />
		</>
	)
}

export default CompraIngresso