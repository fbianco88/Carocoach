import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Item from "../Item/Item";

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

     <div>
      <Item items={items}/>
    </div>
  );
};

export default ItemListContainer;