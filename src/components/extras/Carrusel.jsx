import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from './imagenes/img.jpg';
import img1 from './imagenes/img1.jpg';
import img2 from './imagenes/img2.jpg';

const Carrusel = () => {


    const imagenes = [
      {
        id:1,
        imagen: img,
        titulo: 'primera imagen'
      },
      {
        id:2,
        imagen: img1,
        titulo: 'segunda imagen'
      },
      {
        id:3,
        imagen: img2,
        titulo: 'tercera imagen'
      }
    
    ]
        
          return (
            <>
            <div className= " d-flex  justify-content-center align-items: center">
            <Carousel  style={{ width: '44rem' }}>
            {imagenes.map((imagen) => (
              
              <Carousel.Item  key ={imagen.id}>
                <img
                  
                  style={{ width: '44rem' }}
                  src={imagen.imagen}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{imagen.titulo}</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
              
            ))}
             </Carousel>
             </div>
            </>
      
          );
        }
        
        
    export default Carrusel