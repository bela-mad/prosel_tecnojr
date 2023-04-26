import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import TelaInicial from '../components/TelaInicial/TelaInicial'
import ExploreCategory from '../components/ExploreCategory/ExploreCategory'
import AboutMusik from '../components/AboutMusik/AboutMusik'
import Singers from '../components/Singers/Singers'
import Tier from '../components/Tier/Tier'
import Sponsors from '../components/Sponsors/Sponsors'
import Details from '../components/Details/Details'
import Footer from '../components/Footer/Footer'

const Home = () => {
	return (
		<>
			<Navbar />
			<TelaInicial />
			<ExploreCategory />
			<AboutMusik />
			<Singers />
			<Tier />
			<Sponsors />
			<Details />
			<Footer />
		</>
	)
}

export default Home