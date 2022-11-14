import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fotoA from '../extras/imagenes/fotoA.jpeg'
import fotoC from '../extras/imagenes/fotoC.jpeg'
import fotoV from '../extras/imagenes/fotoV.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Productos = () => {

  const tarjetas = [
    {
      imagen: fotoA,
      titulo: "Fotolibros Apaisados",
      texto: "Fotolibros cuyo ancho es mayor a su altura"
    },
    {
      imagen: fotoC,
      titulo: "Fotolibros Cuadrados",
      texto: "Fotolibros cuyo ancho es igual a su altura"
    },
    {
      imagen: fotoV,
      titulo: "Fotolibros Verticales",
      texto: "Fotolibros cuya altura es mayor que su ancho"
    }
  ]

  return (
    <>
    <Container className='mt-5'>
      <Row>
    {tarjetas.map((tarjeta) => (
      
<Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={tarjeta.imagen}/>
      <Card.Body>
        <Card.Title>{tarjeta.titulo}</Card.Title>
        <Card.Text>
         {tarjeta.texto}
        </Card.Text>
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>
    </Col>


    ))}
    </Row>
    </Container>
    
    </>
  )
}

export default Productos