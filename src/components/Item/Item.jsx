import React, { useEffect, useState } from "react";
import "./item.css"
import { Link } from "react-router-dom";



function Item({items}) {
    return(
      <div className="card">
          {items.map((item) => (
              <li className="cardList" key={item.id}>
                  <Link className="cardListLink" to={`/detalle/${item.id}`}>{item.Titulo}</Link>
                  <p className="txtCard">{item.Categoria}</p>
                  <p className="txtCard">{item.Precio}</p>
              </li>
          ))}
      </div>
    );
   }
export default Item