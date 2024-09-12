import {Link} from 'react-router-dom';
import React from "react";
const ShopingCart=()=>{


  return(
    <>
    <Link to='/'>click</Link>
  {shopList.map((shopped,index)=>{
    if(shopped){
    return(
        <div id='item'>
            <label htmlFor="item">{shopped.item.title}</label>
            <img src={shopped.item.image}/>
        
            Number: {shopped.number}
    </div>
    
    );
    }
})}

</>
);
}
export default ShopingCart;