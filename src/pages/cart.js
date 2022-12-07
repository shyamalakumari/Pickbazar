import { Skeleton } from "antd";
import React from "react";
import {Link,useLocation} from 'react-router-dom';
import styles from "../styles/cart.module.scss";
const Cart =() => {
    // var cart={
    //     items:[1],
    //    total:0
    // }
    const location = useLocation();
    const cart = location.state;
    return (
        <>
        <Card>
        <div className={styles.container}>
            <div className={styles.details}>
            <img src={""} className={styles.image} />

            <div className={styles.detailscontainer}>
                <p className={styles.name}>{e.name}</p>
                <p className={ styles.price}>$ {e.sale_price ? e.sale_price*e.qty}test</p>
                <p className ={styles.qty}>{e.qty}</p>
            </div>
            </div>
            <div className={styles.totalContainer}>
                <p className={styles.total}>test</p>
            </div>
        </div>
        <p> className={styles.totalValue}test</p>
        </Card>: <>
        <Skeleton/>
       <Link to={}></Link>
       <Card/>
        </>
        </>
    )
}

export default Cart;