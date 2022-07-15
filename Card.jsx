import React from 'react'


function Card({modelo,imageSource,precio}) {
    return (
    <div className='card text-center bg-black' >
        <img src={imageSource} alt=""/>
        <div className='card-body text-white'>
            <h4 className='card-title'>{modelo}</h4>
            <p className='card-text text-secondary'>{precio} </p>
            <a href='#!' className='btn btn-outline-secondary rouded-0' style={{border:"0.5px solid #fff", color:"#fff",fontFamily:"Roboto"}}>
                Comprar 
            </a>
        </div>
    </div>
    )
}

export default Card