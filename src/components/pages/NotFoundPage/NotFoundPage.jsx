import React from 'react';
import './notfoundpage.css'

const NotFoundPage = () => {
    return (
        <div className='Container_error'>
            <div className="Card_error">
                <h6 className='h6_error'>¡UPS! Página no encontrada</h6>
                <p>La página que solicitas no se encuentra en nuestro servidor. Intenta volver atrás o ingresar a uno de los siguientes links.</p>
                <h6 className='h6_error'>-/#Listings</h6>
                <h6 className='h6_error'>-/#Header</h6>
                <h6 className='h6_error'>-/Locate</h6>
            </div>
        </div>
    );
};

export default NotFoundPage;