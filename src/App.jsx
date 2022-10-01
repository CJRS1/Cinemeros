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


import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
    return (
        <>
            

            <BrowserRouter>
            <Header />
            <Nav />
            <Routes>

            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/locate" element={<LocateUs/>}/> 
            <Route exact path="/work" element={<WorkWithUs/>}/> 
            <Route exact path="/food" element={<Food/>}/> 
            <Route exact path="/promo" element={<Promo/>}/> 
            <Route exact path="*" element={<NotFoundPage/>}/> 

            </Routes>
            <Footer />
            </BrowserRouter>

            
            
        </>
    )
}

export default App