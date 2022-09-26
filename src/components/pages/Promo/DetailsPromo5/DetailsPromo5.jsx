import React from 'react';
import Promo5 from '../../../../assets/Promo5.png'
import './detailspromo5.css';

const DetailsPromo5 = () => {
    return (
        <div className='body__detailspromo5'>
            <input type="checkbox" id="btn-modal5" />
            <label for="btn-modal5" className='lvl-modal5'>VER DETALLES</label>

            <div className="modal5">
                <div className="container__detailspromo">
                    <div className="container__detailspromo-header">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label for="btn-modal5">X</label>
                    </div>
                    
                    <div className="container__descriptionpromo">
                        <img src={Promo5} alt="" />
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

export default DetailsPromo5;