import React from 'react';
import Promo4 from '../../../../assets/Promo4.png'
import './detailspromo4.css';

const DetailsPromo4 = () => {
    return (
        <div className='body__detailspromo4'>
            <input type="checkbox" id="btn-modal4" />
            <label for="btn-modal4" className='lvl-modal4'>VER DETALLES</label>

            <div className="modal4">
                <div className="container__detailspromo">
                    <div className="container__detailspromo-header">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label for="btn-modal4">X</label>
                    </div>
                    
                    <div className="container__descriptionpromo">
                        <img src={Promo4} alt="" />
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

export default DetailsPromo4;