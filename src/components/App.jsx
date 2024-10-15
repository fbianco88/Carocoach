import { useState } from 'react';
import '../App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import AboutMe from './AboutMe/AboutMe';
import ItemDetail from './ItemDetail/ItemDetail';
import CartWidget from './CartWidget/CartWidget';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
 

  return (
  
<BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path ="/" element = {<AboutMe/>}/>
      <Route path ="/cursos" element={<ItemListContainer/>}/>
      <Route path ="/detalle/:id" element={<ItemDetail/>}/>
      <Route path ="*" element = {<h1>404</h1>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App
