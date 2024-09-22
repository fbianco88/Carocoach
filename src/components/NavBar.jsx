import React from "react";
import CartWidget from "./CartWidget";

function NavBar () {
    return (
        <>
        <ul>
            <li>Sobre mi</li>
            <li>Cursos</li>
            <li>talleres</li>
            <li>Sesiones</li>
        </ul>
        <CartWidget/>
        </>
    )
}
export default NavBar