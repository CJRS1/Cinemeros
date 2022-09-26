import React from 'react';
import Promo3 from '../../../../assets/Promo3.png'
import './detailspromo3.css';

const DetailsPromo3 = () => {
    return (
        <div className='body__detailspromo3'>
            <input type="checkbox" id="btn-modal3" />
            <label for="btn-modal3" className='lvl-modal3'>VER DETALLES</label>

            <div className="modal3">
                <div className="container__detailspromo">
                    <div className="container__detailspromo-header">
                        <header>DESCRIPCIÓN DE LA PROMOCIÓN</header>
                        <label for="btn-modal3">X</label>
                    </div>
                    
                    <div className="container__descriptionpromo">
                        <img src={Promo3} alt="" />
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

export default DetailsPromo3;