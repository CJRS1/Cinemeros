import Carousel from 'react-bootstrap/Carousel';
import Promocion1 from '../../assets/Promocion1.jpg';
import Promocion2 from '../../assets/Promocion2.jpg';
import Comunicado from '../../assets/Comunicado.jpg';
import './carousel.css'
import * as React from 'react'

function IndividualIntervalsExample() {

    return (
        <Carousel >
            <Carousel.Item interval={5000}>
                {/* <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                /> */}
                <Carousel.Caption>
                    
                    <img src={Comunicado} alt="" width="200px" height="180px"/>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                {/* <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                /> */}
                <Carousel.Caption>
                    
                    <img src={Promocion2} alt="" width="200px" height="180px"/>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                /> */}
                <Carousel.Caption>
                <img src={Promocion1} alt="" width="200px" height="180px"/>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;