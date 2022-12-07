import React from "react";
// import "../styles/index.css";
import '../styles/header.css';

const  ProductCard = ({data,cart,setCart})=>
{
 const updateCart =(product,action)=>{
    let price =0;
    let tempCart=cart;
    if(product.sale_price){
        price=product.sale_price
    }
    else{
        price =product.price
    }

if(action === "add")
{
    console.log(tempCart)
    if(tempCart.items.length === 0)
    {
        console.log("shyamala")
        product.qty = 1;
        tempCart.items .push(product);
        tempCart.total = price;
        setCart(tempCart)
    }
    else{
        const temp = tempCart.items.filter(e =>e.id === product.id);
        let total = tempCart.total;
        if(temp.length){
            const newCart = tempCart.items.map(e =>{
                if(e.id === product.id){
                    e.qty += 1;
                    total += price;
                }
                return e;
            })
           tempCart.total = total;
           tempCart.items = newCart;
           setCart(tempCart);
        }
        else{
            tempCart.items.push({...product,quantity:1});
            tempCart.total += price;
            setCart(tempCart);
        }
    }
}
if(action === 'remove'){
    if(!tempCart.items.length)return;
    let temp =tempCart.items.filter(e => e.id == product.id);
    console.log(temp);
    if(!temp.length) return;
    let total = tempCart.total;
    if(temp[0].qty ===1){
        temp = temp.filter(e => e.id !== product.id);
        total -=price;
        tempCart = {
            items :temp,
            total
        }
        setCart(tempCart);
    }
    else{
        const newCart = tempCart.items.map(e =>{
            if(e.id === product.id)
            {
                e.qty -=1;
                total -= price;
            }
            return e;
        })
        tempCart.items = newCart
        tempCart.total = total;
        setCart(tempCart);
    }
}
}
return (
   
    <div className='productCard'>
                {data.sale_price !== null &&
                <span className='discount'>
                          {(((data.price-data.sale_price)/data.price)*100).toFixed(0)}%
                </span>}
                <div className='imgContainer'>
                    <img src={data.image.original} className='image' />
                </div>
                <div className='priceContainer'>
                    {data.sale_price !==null ? <>
                    <p className='salePrice'>${data.sale_price}</p>
                    <p className='price'><strike>${data.price}</strike></p>
                    </>:
                    <p className='price'>{data.price}</p>
                    }
                </div>
                <p className='name'>{data.name}</p>
                <div className='addToCart'>
                <p className='minusSymbol' onClick={() =>updateCart(data,'remove')} >-</p>
                <p className='addText'>Add </p>
                <p className='addSymbol'  onClick={() =>updateCart(data,'add')} >+</p>
                </div>
                
              </div>
           
)
}

export default  ProductCard;