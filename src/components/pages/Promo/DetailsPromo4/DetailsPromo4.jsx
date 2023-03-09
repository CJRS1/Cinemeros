import React from 'react';
import Promo4 from '../../../../assets/Promo4.png'
import './detailspromo4.css';

const DetailsPromo4 = () => {
    return (
        <div className='body__detailspromo4'>

            <input type="checkbox" id="btn-modal4" />


            <div className="body_viewdetail4">
                
                <label htmlFor="btn-modal4">
                <div className="body_ib4">
                <img htmlFor="btn-modal4" className='img__promo' src={Promo4} alt="" />
                <h6  className='lvl-modal4'>VER DETALLES</h6>
                </div>
                
                </label>
            </div>

            <div className="modal4">
                <div className="container__detailspromo4">
                    <div className="container__detailspromo-header4">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label htmlFor="btn-modal4" className='close4'>X</label>
                    </div>
                    <div className="container__descriptionpromo4">
                        <img src={Promo4} alt="" />
                        <div className="card__detailspromo4">
                            <h6>Promoción válida hasta el 30 de Octubre
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPromo4;