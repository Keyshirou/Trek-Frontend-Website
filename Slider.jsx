import React from "react"
import {Carousel} from 'react-bootstrap'
import img1 from '../images/slide1.jpg'
import img2 from '../images/slide2.jpg'
import img3 from '../images/slide3.jpg'
import img4 from '../images/slide4.jpg'

//intervalos de tiempo del carousel, import de las imagenes que utilizo y las etiquetas de texto 
const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1400}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>La Top Fuel 8 es la bicicleta de trail del año</h3>
                        <p>MBKU ha definido la Top Fuel como la mejor opción para los ciclistas de trail</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1400}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>El comienzo de una nueva era</h3>
                        <p>La Fuel Exe redefine las bicicletas eléctricas de montaña</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1400}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Avanza más rápido</h3>
                        <p>Con la nueva generación de Trek Marlin 2022</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1400}>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Bicicletas de descenso</h3>
                        <p>Nuestras bicicletas de descenso han sido diseñadas para volar por los parques de grava</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
export default Slider