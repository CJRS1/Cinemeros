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
import { datafood } from './components/pages/Food/Datafood'

import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    //Van lo estados que se les pasaran a todos los componentes
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [productList, setProductList] = useState(datafood)

    return (
        <>  <React.Fragment>
            <BrowserRouter>
                <Header
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                    productList={productList}
                    setProductList={setProductList}
                />
                <Nav />
                <Routes>
                    <Route exact path="/Cinemeros" element={<Home />} />
                    <Route exact path="/Cinemeros/locate" element={<LocateUs />} />
                    <Route exact path="/Cinemeros/work" element={<WorkWithUs />} />
                    <Route exact path="/Cinemeros/food" element={<Food
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        productList={productList}
                        setProductList={setProductList}
                    />} />
                    <Route exact path="/Cinemeros/promo" element={<Promo />} />
                    <Route exact path="/Cinemeros/singin" element={<SingIn />} />
                    <Route exact path="/Cinemeros/register" element={<Register />} />
                    <Route exact path="*" element={<NotFoundPage />} />
                    <Route exact path="/Cinemeros/movies/:movieId" element={<MovieDetails />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.Fragment>

        </>
    )
}

export default App