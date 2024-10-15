import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function ItemDetail() {

    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("/cursos.json")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setItems(data); 
        })
    
    }, []); 
  
  const { id } = useParams();

  const item = items.find((item) => item.id == id);

  if (!item) {
    return <p>Curso no disponible</p>;
  }

  return (
    <div>
      <h3>{item.Titulo}</h3>
      <p>{item.Categoria}</p>
      <p>{item.Descripcion}</p>
      <p>{item.Precio}</p>
    </div>  
  );
}

export default ItemDetail;