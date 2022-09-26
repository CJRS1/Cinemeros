import React from 'react';
import Promo1 from '../../../../assets/Promo1.png'
import './detailspromo.css';

const DetailsPromo1 = () => {
    return (
        <div className='body__detailspromo'>
            <input type="checkbox" id="btn-modal" />
            <label for="btn-modal" className='lvl-modal'>VER DETALLES</label>
            <div className="modal">
                <div className="container__detailspromo">
                    <div className="container__detailspromo-header">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label for="btn-modal">X</label>
                    </div>
                    <div className="container__descriptionpromo">
                        <img src={Promo1} alt="" />
                        <div className="card__detailspromo">
                            <h6>Promoción válida hasta el 30 de Octubre
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPromo1;