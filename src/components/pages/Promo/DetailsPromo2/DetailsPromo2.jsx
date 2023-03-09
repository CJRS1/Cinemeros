import React from 'react';
import Promo2 from '../../../../assets/Promo2.png'
import './detailspromo2.css';

const DetailsPromo2 = () => {
    return (
        <div className='body__detailspromo2'>

            <input type="checkbox" id="btn-modal2" />


            <div className="body_viewdetail2">
                
                <label htmlFor="btn-modal2">
                <div className="body_ib2">
                <img htmlFor="btn-modal2" className='img__promo' src={Promo2} alt="" />
                <h6  className='lvl-modal2'>VER DETALLES</h6>
                </div>
                
                </label>
            </div>

            <div className="modal2">
                <div className="container__detailspromo2">
                    <div className="container__detailspromo-header2">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label htmlFor="btn-modal2" className='close2'>X</label>
                    </div>
                    <div className="container__descriptionpromo2">
                        <img src={Promo2} alt="" />
                        <div className="card__detailspromo2">
                            <h6>Promoción válida hasta el 30 de Octubre
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPromo2;