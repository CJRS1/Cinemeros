import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Home from './components/pages/Home/Home'
import LocateUs from './components/pages/LocateUs/LocateUs'
import WorkWithUs from './components/pages/WorkWithUs/WorkWithUs'
import Footer from './components/footer/Footer'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'
import Food from './components/pages/Food/Food'
import Promo from './components/pages/Promo/Promo'
import SingIn from './components/pages/Singin/SingIn'
import Register from './components/pages/Register/Register'
import MovieDetails from './components/pages/MovieDetails/MovieDetails'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

    return (
        <>  <React.Fragment>
            <BrowserRouter>
                <Header />
                <Nav />
                <Routes>
                    <Route exact path="/Cinemeros" element={<Home />} />
                    <Route exact path="/Cinemeros/locate" element={<LocateUs />} />
                    <Route exact path="/Cinemeros/work" element={<WorkWithUs />} />
                    <Route exact path="/food" element={<Food />} />
                    <Route exact path="/promo" element={<Promo />} />
                    <Route exact path="/singin" element={<SingIn />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="*" element={<NotFoundPage />} />
                    <Route exact path="/movies/:movieId" element={<MovieDetails />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.Fragment>

        </>
    )
}

export default App