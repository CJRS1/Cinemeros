import React from 'react';
import Promo5 from '../../../../assets/Promo5.png'
import './detailspromo5.css';

const DetailsPromo5 = () => {
    return (
        <div className='body__detailspromo5'>

            <input type="checkbox" id="btn-modal5" />


            <div className="body_viewdetail5">
                
                <label htmlFor="btn-modal5">
                <div className="body_ib5">
                <img htmlFor="btn-modal5" className='img__promo' src={Promo5} alt="" />
                <h6  className='lvl-modal5'>VER DETALLES</h6>
                </div>
                
                </label>
            </div>

            <div className="modal5">
                <div className="container__detailspromo5">
                    <div className="container__detailspromo-header5">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label htmlFor="btn-modal5" className='close5'>X</label>
                    </div>
                    <div className="container__descriptionpromo5">
                        <img src={Promo5} alt="" />
                        <div className="card__detailspromo5">
                            <h6>Promoción válida hasta el 30 de Octubre
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPromo5;