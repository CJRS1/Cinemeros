import React from 'react';
import Promo3 from '../../../../assets/Promo3.png'
import './detailspromo3.css';

const DetailsPromo3 = () => {
    return (
        <div className='body__detailspromo3'>

            <input type="checkbox" id="btn-modal3" />


            <div className="body_viewdetail3">
                
                <label htmlFor="btn-modal3">
                <div className="body_ib3">
                <img htmlFor="btn-modal3" className='img__promo' src={Promo3} alt="" />
                <h6  className='lvl-modal3'>VER DETALLES</h6>
                </div>
                
                </label>
            </div>

            <div className="modal3">
                <div className="container__detailspromo3">
                    <div className="container__detailspromo-header3">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label htmlFor="btn-modal3" className='close'>X</label>
                    </div>
                    <div className="container__descriptionpromo3">
                        <img src={Promo3} alt="" />
                        <div className="card__detailspromo3">
                            <h6>Promoción válida hasta el 30 de Octubre
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPromo3;