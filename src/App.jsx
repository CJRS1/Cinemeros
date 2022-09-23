import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Listings from './components/listings/Listings'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import IndividualIntervalsExample from './components/carousel/Carousel'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <IndividualIntervalsExample />
            <Listings />
            <Contact />
            <Footer />
        </>
    )
}

export default App