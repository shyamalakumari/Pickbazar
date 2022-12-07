import React from "react";
import {Link} from "react-router-dom";

import { Card,Carousel,carousel } from 'antd'
 import { MinusOutlined,PlusOutlined } from '@ant-design/icons';
 const { Meta } = Card;

 const AddTocartText = ({ value }) => <p>{value ? value :"Add To Cart"}</p>

 const contentStyle ={
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
 };
 const ProductCard =({ data,cart,setCart}) => {
    const isPresent = cart.items.filter(e => e.id === data.id);
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
 }


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
  
    <Card
    
    bordered
    hoverable
    style={{width: 250}}
    cover={data.gallery.length ?<Carousel afterChange={onChange}>
        {data.gallery.map(e => {
            return (
                <img src={e.thumbnail} width ="150px" style={{margin:"0 auto"}}/>
            )
        })}
   </Carousel>: <img src={data.image.thumbnail} width="150px" style={{margin: "0 auto"}}/>}
    actions={[
        <MinusOutlined onClick={() => updateCart(data,'remove')} key="remove"/>,
        <AddTocartText value={isPresent[0] && isPresent[0].qty}/>,
        <PlusOutlined onClick={() => updateCart(data,'add')} key="add" />,



      
    ]}
 
    


)