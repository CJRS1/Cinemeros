import React from 'react';
import Promo6 from '../../../../assets/Promo6.png'
import './detailspromo6.css';

const DetailsPromo6 = () => {
    return (
        <div className='body__detailspromo6'>

            <input type="checkbox" id="btn-modal6" />


            <div className="body_viewdetail6">
                
                <label htmlFor="btn-modal6">
                <div className="body_ib6">
                <img htmlFor="btn-modal6" className='img__promo' src={Promo6} alt="" />
                <h6  className='lvl-modal6'>VER DETALLES</h6>
                </div>
                
                </label>
            </div>

            <div className="modal6">
                <div className="container__detailspromo6">
                    <div className="container__detailspromo-header6">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label htmlFor="btn-modal6" className='close6'>X</label>
                    </div>
                    <div className="container__descriptionpromo6">
                        <img src={Promo6} alt="" />
                        <div className="card__detailspromo6">
                            <h6>Promoción válida hasta el 30 de Octubre
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPromo6;