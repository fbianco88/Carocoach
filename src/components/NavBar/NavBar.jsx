import React from "react";
import '../NavBar/NavBar.css'
import logo from '../../assets/logo.svg'
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";

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
      
            <div className="navlist">
                <Link className="navSection" to="/"> Sobre mi</Link>
                <Link className="navSection" to="/talleres">Talleres</Link>
                <Link className="navSection" to='/cursos'>Cursos</Link>
                <Link className="navSection" to='/sesiones'>Sesiones</Link>
            </div>
        
        </nav>
        
    )
}
export default NavBar