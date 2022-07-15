import './App.css';
import React from 'react';
import trek from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';
import Cards from './components/Cards';
import wallpaper2 from './images/2wallpaper.jpeg'
import {faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'


//para esta pagina web se instalaron repositorios de font awesome para utilizar sus iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBicycle} from '@fortawesome/free-solid-svg-icons'
import {faLeaf} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faShop} from '@fortawesome/free-solid-svg-icons'

import Form from 'react-bootstrap/Form';



function App() {
  return (
    <div className="App">
      <body>
      <header className = "App-header" >
        
        <a href="logo" className='logo'> <img src={trek} alt="" /></a>
      <nav className='NavBar'>
      <ul>
      <li><a href="#zona1">Inicio</a></li>
      <li><a href="#zona2">Presentación</a></li>
      <li><a href="#zona3">Catálogo</a></li>
      <li><a href="#zona4">Contacto</a></li>
      </ul>
      </nav>
        </header>
        <section className='zona1' id='zona1'><Slider /></section>
        <section className='zona2' id='zona2'>
          <figure>
            <img src={wallpaper2} alt="" />
            <div className='capa'>
              <div className='container1'>
              <h1> Nuestros inicios </h1>
              <div className='Icono1' style={{fontSize:"30px"}} ><FontAwesomeIcon icon={faBicycle} /></div>
              
              <p>En la primavera de 1976, Richard “Dick” Burke y Bevil Hogg, fundaron Trek, una pequeña empresa en la ciudad de Waterloo, Wisconsin, dedicada a la fabricación artesanal de refacciones para bicicleta. Trek, cuyo nombre en afrikaans significa “viaje”, fue fundada con la meta de superar la calidad de las empresas italianas y japonesas, que en aquellos años dominaban el panorama ciclista. Por ello, desde un principio cuidaron meticulosamente cada detalle en la construcción de las bicicletas, llegando con el tiempo, incluso, a incorporar tecnología aeroespacial. No en balde Trek es sinónimo de calidad y durabilidad.</p>
              <div class="container1-icon">
            </div>
              </div>
              <div className='container2'>
              <h1> Nuestras iniciativas </h1> 
              <p>Trek es donante y socio desde hace años de World Bicycle Relief, una organización que entrega bicicletas a las personas más necesitadas para que tengan acceso a un medio de transporte en los países en vías de desarrollo. A través de las bicicletas, la WBR está teniendo un gran impacto en comunidades rurales. <br />Trek es miembro fundador de PeopleForBikes, el principal grupo de defensa del ciclismo en Norteamérica. PeopleForBikes funciona, a nivel local y nacional, como un lobby que defiende un cambio significativo a favor del desarrollo de infraestructuras para bicicletas, y de rutas más seguras y mejores para todos los ciclistas.</p>
              <div className='Icono2' style={{fontSize:"30px"}}><FontAwesomeIcon icon={faHeart} /></div>
              </div>
              <div className='container3'>
              <h1> Nuestra misión </h1>  
              <div className='Icono3' style={{fontSize:"30px"}}><FontAwesomeIcon icon={faLeaf} /></div> 
              <p>Las cuatro últimas décadas han sido testigo de más innovaciones que los cuatrocientos años anteriores. Las bicicletas no son inmunes a estos avances tecnológicos y Trek ha liderado el movimiento, desafiando continuamente los límites de lo que es capaz una bicicleta. Nuestro compromiso con la innovación y los principios fundacionales, que nos animan a fabricar bicicletas para las personas, nos han llevado hasta aquí. Somos conscientes de lo mucho que queda por hacer. El planeta necesita la bicicleta más que nunca. Y Trek está construyendo un planeta mejor, gracias a esta elegante y sencilla máquina. Ven a rodar con nosotros.</p>
              </div>
            </div>
          </figure>
          </section>
        <section className='zona3' id='zona3'>
        <h1>Catálogo</h1>
          <div>
          <Cards />
          </div>
        </section>
        
        <section className='zona4' id='zona4'>
        <div className="contact">
                <div className="contact-form">
                    <Form>
                    <h2>Contacto</h2>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="textarea" placeholder="Ingrese su nombre" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" placeholder="Escriba aquí el asunto o mensaje">
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <button className="btn-submit">Enviar</button>
                      </Form.Group>
                    </Form>
                </div>
            </div>
        </section>

        <div class="footer-barra"></div>
    <footer class="footer ">
        <h3>Frontend Sección P12C2 2022 <span>|</span> Egon Benavente Rodríguez <div className="redes" style={{fontSize:"30px"}}>
        <a href="https://www.trekbikes.com/es/es_ES/" target="blank"><FontAwesomeIcon icon={faShop} /></a>       <a href="https://github.com/Keyshirou" target="blank"><FontAwesomeIcon icon={faGithub} /></a>    <a className='insta' href="https://www.instagram.com/trekbikes/" target="blank"><FontAwesomeIcon icon={faInstagram}/></a>  </div> </h3>
        

    </footer>
      </body>
        </div >
  );
}

export default App;
