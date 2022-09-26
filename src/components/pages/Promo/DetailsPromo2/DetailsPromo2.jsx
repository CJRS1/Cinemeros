import React from 'react';
import Promo2 from '../../../../assets/Promo2.png'
import './detailspromo2.css';

const DetailsPromo2 = () => {
    return (
        <div className='body__detailspromo2'>
            <input type="checkbox" id="btn-modal2" />
            <label for="btn-modal2" className='lvl-modal2'>VER DETALLES</label>

            <div className="modal2">
                <div className="container__detailspromo">
                    <div className="container__detailspromo-header">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label for="btn-modal2">X</label>
                    </div>
                    
                    <div className="container__descriptionpromo">
                        <img src={Promo2} alt="" />
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

export default DetailsPromo2;