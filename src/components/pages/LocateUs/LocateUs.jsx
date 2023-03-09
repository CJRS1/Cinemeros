import React from 'react';
import './locateus.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const LocateUs = () => {
    function useScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
    }

    useScrollToTop();
    return (
        <div id='#Header' className='container__LocateUs'>
            <div className="container_ubi__LocateUs">
                <div className="card_ubi__LocateUs">
                    <h3>CINEMEROS MEGAPLAZA</h3>
                    <iframe title="jsx-a11y/iframe-has-title" width = "200px" className='ubi__LocateUs' rel="noopener noreferrer" src="https://maps.google.com/maps?q=Megaplaza%20Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <small>Calle Alfredo Mendiola 3698 Km 8.5 de la Av. Panamericana</small>
                </div>
                <div className="card_ubi__LocateUs">
                    <h3>CINEMEROS ANGAMOS</h3>
                    <iframe title="jsx-a11y/iframe-has-title" width = "200px" className='ubi__LocateUs' rel="noopener noreferrer" src="https://maps.google.com/maps?q=Megaplaza%20Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <small>Av. Angamos Nº 1803 y/o Av. Tomas Marsano Nº 961-</small>
                </div>
                <div className="card_ubi__LocateUs">
                    <h3>CINEMEROS GAMARRA</h3>
                    <iframe title="jsx-a11y/iframe-has-title" width = "200px" className='ubi__LocateUs' rel="noopener noreferrer"  src="https://maps.google.com/maps?q=Megaplaza%20Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <small>Avenida Aviación 950 La Victoria, LIMA 13</small>
                </div>
                <div className="card_ubi__LocateUs">
                    <h3>CINEMEROS SAN MIGUEL</h3>
                    <iframe title="jsx-a11y/iframe-has-title" width = "200px" className='ubi__LocateUs' rel="noopener noreferrer" src="https://maps.google.com/maps?q=Megaplaza%20Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <small>Av. La Marina cuadra 25 con esquina Av. Parque de las</small>
                </div>
                <div className="card_ubi__LocateUs">
                    <h3>CINEMEROS PLAZA LIMA SUR</h3>
                    <iframe title="jsx-a11y/iframe-has-title" width = "200px" className='ubi__LocateUs' rel="noopener noreferrer" src="https://maps.google.com/maps?q=Megaplaza%20Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <small>Av. Prolongación Paseo de La República s/n Urb. Matellini </small>
                </div> 
                <div className="card_ubi__LocateUs">
                    <h3>CINEMEROS COMAS</h3>
                    <iframe title="jsx-a11y/iframe-has-title" width = "200px" className='ubi__LocateUs' rel="noopener noreferrer" src="https://maps.google.com/maps?q=Megaplaza%20Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <small>Calle 2 126</small>
                </div>
                <div className="card_ubi__LocateUs">
                    <h3>CINEMEROS HUANCAYO</h3>
                    <iframe title="jsx-a11y/iframe-has-title" width = "200px" className='ubi__LocateUs' rel="noopener noreferrer" src="https://maps.google.com/maps?q=Megaplaza%20Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <small>Av. Ferrocarril 146 - 150 esquina con prolongación San Carlos</small>
                </div>
                <div className="card_ubi__LocateUs">
                    <h3>CINEMEROS JOCKEY PLAZA</h3>
                    <iframe title="jsx-a11y/iframe-has-title" width = "200px" className='ubi__LocateUs' rel="noopener noreferrer" src="https://maps.google.com/maps?q=Megaplaza%20Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <small>Av. Javier Prado Este 4200 Monterrico Surco</small>
                </div>
            </div>
        </div>
    );
};

export default LocateUs;