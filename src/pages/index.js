// import React from "react";
// import App from "../App";

import React,{useEffect, useState} from 'react';
// import '../styles/index.css';
import '../styles/header.css';
import ProductCard from "../components/productcard.js";







const Home = () =>{
      const [state,setState] =useState(0)
      
    //   console.log(products);
      var x=1;
    const add = () =>{
        // setState(state+1)
        x +=1;
        console.log(x)
    }
    const substract= () =>{
      
        x -=1;
        console.log(x)
    }
const [cart,setCart]=useState({
    items :[],
    total : 0
})
// const [cart, setCart] = useState({

let [productsData,setProductsData] = useState([]);
const fetchData =() =>{
fetch("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=60&language=en&search=type.slug:grocery%3Bstatus:publish")
.then(res => res.json())
.then(resp =>setProductsData(resp.data))
.catch(err => console.log(err));
// console.log(productsData);

}
useEffect(()=>{
    fetchData()
},[])
console.log(productsData);

    return (
        <div className="Appp">
            {/* <p>{x}</p>
            <button onClick={add}>Add</button>
            <button onClick={substract}>substract</button> */}

            {
                productsData.map(e=> 
              <>
              <ProductCard data={e} cart={cart} setCart={setCart}/>
              {/* <div className='productCard'>
                {e.sale_price !== null &&
                <span className='discount'>
                          {(((e.price-e.sale_price)/e.price)*100).toFixed(0)}%
                </span>}
                <div className='imgContainer'>
                    <img src={e.image.original} className='image' />
                </div>
                <div className='priceContainer'>
                    {e.sale_price !==null ? <>
                    <p className='salePrice'>${e.sale_price}</p>
                    <p className='price'><strike>${e.price}</strike></p>
                    </>:
                    <p className='price'>{e.price}</p>
                    }
                </div>
                <p className='name'>{e.name}</p>
                <div className='addToCart'>
                <p className='minusSymbol' >-</p>
                <p className='addText'>Add </p>
                <p className='addSymbol' >+</p>
                </div>
              </div> */}
              </>
                 )
            }
        </div>
    );
}
export default Home;