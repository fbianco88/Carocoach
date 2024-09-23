import React from "react";
import CartWidget from "./CartWidget";
import '../index.css'
import logo from '../assets/logo.svg'
function NavBar () {
    return (
        
        <nav className="navbar">
            <div className="principal">
                <img className="logo" src={logo}/>
                <div className="titulos">
                    <h1>Lic. Carolina Fernandez Vila</h1>
                    <h2>Trabajadora Social & Coach Educativa</h2>
                </div>
                <CartWidget/>
            </div>
      
            <ul className="navlist">
                <li>Sobre mi</li>
                <li>Cursos</li>
                <li>Talleres</li>
                <li>Sesiones</li>
            </ul>
        
        </nav>
        
    )
}
export default NavBar