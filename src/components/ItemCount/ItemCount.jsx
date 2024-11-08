import React from "react";
import "./ItemCount.css"
import { useState } from "react";

function ItemCount ({stock,initial,onAdd}) {
    const[quantity,setQuantity] = useState (initial)  

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)

        }
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)

        }
    }
    return (
     <div className="count">
     <button onClick={decrement}> - </button>
     <h4>{quantity}</h4>
     <button onClick={increment}> + </button>
     <button onClick={()=>onAdd(quantity)} disabled = {(!stock) }></button>
     </div>
    )
}
export default ItemCount