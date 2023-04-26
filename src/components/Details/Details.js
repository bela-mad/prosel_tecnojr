import React from 'react'
import "./Details.css"
import telefoneIcon from './../../imagens/icons/telefone_icon.png'
import emailIcon from './../../imagens/icons/email_icon.png'
import enderecoIcon from './../../imagens/icons/endereco_icon.png'
import contactUsImage from './../../imagens/img_contactus.png'

const Details = () => {
	return (
		<div className="details">
      <div className="row_details">
        <div className="column_details" id="contact_us">
          <h2>Contact us</h2>
          <h3>Have an inquiry? We’ll be happy to assist you!</h3>
          <p><b><img className="icon_details" src={telefoneIcon} />+92 333 6527366</b></p>
          <p><b><img className="icon_details" src={emailIcon} />abuzer@greelogix.com</b></p>
          <p><b><img className="icon_details" src={enderecoIcon} />Plot 252, Block L Phase 2 Johar Town, Lahore, PK</b></p>
          <img id="img_contactus" src={contactUsImage} />
        </div>
        <div className="column_details" id="details">
          <h3>Fill in your details</h3>
          <form className="form-login">
            <div className="form-floating">
              <label htmlFor="floatingPassword">Name</label>
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="John Doe"
                name="senha"
              />
            </div>
            <div className="form-floating">
              <label htmlFor="floatingInput">Email</label>
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="johndoe2347@mail.com"
                name="email"
                required
              />
            </div>
            <div className="form-floating">
              <label htmlFor="floatingPassword">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex"></textarea>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
	)
}

export default Details