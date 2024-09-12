import {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import {Shopcontext} from './Shopcontext';
import './Home.css'
import ShopingCart from "./ShopingCart";
const links=[];
links[0]='https://fakestoreapi.com/products/1';
links[1]='https://fakestoreapi.com/products/2';
links[2]='https://fakestoreapi.com/products/3';
links[3]='https://fakestoreapi.com/products/4';


    const classes=[];
    for(let i=0;i<4;i++){
      classes[i]=await fetch(links[i],{mode:'cors'})
    .then(clas=>clas.json());
    classes[i]={...classes[i],totalNum:0};
    }

    const Home=()=>{
    const [cards,addCards]=useState([]);
    const [shopList,addShop]=useState([]);
    

    function clickHandle(cardd){
        
        const shopped={item:cardd,number:cardd.totalNum};
        addShop([...shopList,shopped]);
        console.log(shopped.item);
        console.log(shopped.number);
    };
    
    useEffect(()=>{
        
        addCards(classes);
return()=>{
    addCards();
}           
    },[]);
    
    return(
        <Shopcontext.Provider value={shopList}>
    <div id='homePage'>
        
        <Link to='ShopingCart'>click</Link>
        <div className='container'>
        {cards.map((card,index)=>{
            return(
                <div id='item'>
                    <label htmlFor="item">{card.title}</label>
                    <img src={card.image}/>
                    Price: {card.price}
        <input  type="number" key={index} onChange={(event)=>{card.totalNum=event.target.value}}/> 
        <button type='button'  onClick={()=>{
            clickHandle(card);
            console.log('card: ',card);
        }}>Add</button>
            </div>
            );
        })}
        </div>
        
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
        
        
        </div>
        </Shopcontext.Provider>
    );

};
export default Home;
