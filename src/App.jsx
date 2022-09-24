import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Home from './components/pages/Home'
import LocateUs from './components/pages/LocateUs'
import WorkWithUs from './components/pages/WorkWithUs'
import Footer from './components/footer/Footer'
import NotFoundPage from './components/pages/NotFoundPage'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Header />
            <Nav />

            <BrowserRouter>

            <Routes>

            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/locate" element={<LocateUs/>}/> 
            <Route exact path="/work" element={<WorkWithUs/>}/> 
            <Route exact path="*" element={<NotFoundPage/>}/> 

            </Routes>
            
            </BrowserRouter>

            
            <Footer />
        </>
    )
}

export default App