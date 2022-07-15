import React from 'react'
import Card from './Card'

import image1 from '../images/imagen1.png'
import image2 from '../images/imagen2.png'
import image3 from '../images/imagen3.png'
import image4 from '../images/imagen4.png'



const cards = [
    {
        id:1,
        modelo:'Top Fuel 7',
        image: image1,
        precio: "$3.390.990"
    },
    {
        id:2,
        modelo:'Roscoe 6',
        image: image2,
        precio: "$700.000"
    },
    {
        id:3,
        modelo: 'X-Calibur 9',
        image: image3,
        precio: "$1.990.000"
    },
    {
        id:4,
        modelo: 'Emonda SL-7',
        image: image4,
        precio: "$13.000.000"
    },
    
    
    
]

function Cards() {
    console.log(cards)
    return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(card=>(
                    <div className='col-md-3' key={card.id} >
                        <Card modelo={card.modelo} imageSource={card.image} precio={card.precio}/>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Cards
