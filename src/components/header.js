import React from 'react'
import logo from '../media/PickBazar.webp';
import '../styles/header.css';
// import '../styles/index.css';
export default function Header() {
  return (
    <div className='main'>
    <div className='div'>
        
    <div ><img className='imgg' src={logo}/></div>
    <div className='items'>
        <select>
            <option>Grocery</option>
            <option>Bakery</option>
            <option>Bags</option>
            <option>Makeup</option>
            <option>clothing</option>
            <option>Furniture</option>
            <option>Daily Needs</option>
        
        </select>
    </div>
    <div className='pick' >shops</div>
    <div className='pick'>offers</div>
    <div className='pick'>FAQ</div>
    <div className='pick'>contacts</div>
    <div className='pick1'>Become a seller</div>
    <div className='pick2'>join</div>
    </div>
    <div >
  <div className='headingtext'>Groceries Delivered in 90 Minute</div>
  <div className='headingg'>Get your healthy foods & snacks delivered at your doorsteps all day everyday</div>
<input className='inp' placeholder="search your products from here" type={Text}/>
<button className='submit'>Submit</button>
</div>
    </div>


  )
}








