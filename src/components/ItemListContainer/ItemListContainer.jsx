import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";


function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/cursos.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setItems(data); 
      })
  
  }, []); 

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.titulo}</li>
      ))}
    </ul>
  );
};

export default ItemListContainer;