import React from 'react';
import DetailsPromo1 from './DetailsPromo1/DetailsPromo1'
import DetailsPromo2 from './DetailsPromo2/DetailsPromo2'
import DetailsPromo3 from './DetailsPromo3/DetailsPromo3'
import DetailsPromo4 from './DetailsPromo4/DetailsPromo4'
import DetailsPromo5 from './DetailsPromo5/DetailsPromo5'
import DetailsPromo6 from './DetailsPromo6/DetailsPromo6'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './promo.css'

const Promo = () => {
    function useScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
    }

    useScrollToTop();
    return (
        <div className='div__promo'>
            <nav className='nav__promo'>
                <div className='container__promo' >
                    <div className="details__promo">
                        <DetailsPromo1 />
                    </div>
                </div>
                <div className='container__promo'>
                    <div className="details__promo">
                        <DetailsPromo2 />
                    </div>
                </div>
                <div className='container__promo'>
                    <div className="details__promo">
                        <DetailsPromo3 />
                    </div>
                </div>
                <div className='container__promo'>
                    <div className="details__promo">
                        <DetailsPromo4 />
                    </div>
                </div>
                <div className='container__promo'>
                    <div className="details__promo">
                        <DetailsPromo5 />
                    </div>
                </div>
                <div className='container__promo'>
                    <div className="details__promo">
                        <DetailsPromo6 />
                    </div>
                </div>
            </nav>

        </div>


    );
};

export default Promo;