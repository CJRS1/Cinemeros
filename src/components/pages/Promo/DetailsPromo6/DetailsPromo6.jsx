import React from 'react';
import Promo6 from '../../../../assets/Promo6.png'
import './detailspromo6.css';

const DetailsPromo6 = () => {
    return (
        <div className='body__detailspromo6'>
            <input type="checkbox" id="btn-modal6" />
            <label for="btn-modal6" className='lvl-modal6'>VER DETALLES</label>

            <div className="modal6">
                <div className="container__detailspromo">
                    <div className="container__detailspromo-header">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label for="btn-modal6">X</label>
                    </div>
                    
                    <div className="container__descriptionpromo">
                        <img src={Promo6} alt="" />
                        <div className="card__detailspromo">
                            <h6>Promoción válida hasta el 30 de Octubre sss
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPromo6;