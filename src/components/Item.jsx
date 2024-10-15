import React, { useEffect, useState } from "react";
import ("./ItemListContainer/ItemListContainer.css")
import { Link } from "react-router-dom";



function Item({items}) {
    return(
        <ul>
        {items.map((item) => (
          <li className="itemList" key={item.id}>
            <Link to={`/detalle/${item.id}`}>{item.Titulo}</Link>
            <p>{item.Categoria}</p>
            <p>{item.Precio}</p>
          </li>
        ))}
      </ul>
    );
   }
export default Item