import React from 'react'
import "./ExploreCategory.css"
import popIcon from './../../imagens/icons/pop_icon.png'
import folkIcon from './../../imagens/icons/folk_icon.png'
import instrumentalIcon from './../../imagens/icons/instrumental_icon.png'
import rockIcon from './../../imagens/icons/rock_icon.png'
import jazzIcon from './../../imagens/icons/jazz_icon.png'

const ExploreCategory = () => {
	return (
		<div className="explore_category">
      <h2><b>Explore</b> By Category</h2>
      <div className="row_explore">
        <div className="column_explore" id="pop">
          <img src={popIcon} />
          <h3>Pop</h3>
          <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
        </div>
        <div className="column_explore" id="folk">
          <img src={folkIcon} />
          <h3>Folk</h3>
          <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
        </div>
        <div className="column_explore" id="instrumental">
          <img src={instrumentalIcon} />
          <h3>Instrumental</h3>
          <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
        </div>
        <div className="column_explore" id="rock">
          <img src={rockIcon} />
          <h3>Rock</h3>
          <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
        </div>
        <div className="column_explore" id="jazz">
          <img src={jazzIcon} />
          <h3>Jazz</h3>
          <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
        </div>
      </div>
    </div>
	)
}

export default ExploreCategory