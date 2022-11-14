import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Productos from '../pages/Productos';
import Navegacion from '../navbar/Navegacion'

const Rutas = () => {
  return (
    <>
    <Navegacion/>
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Productos" element={<Productos/>}/>
    </Routes>
    </>
  )
}

export default Rutas
