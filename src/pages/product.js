import React from "react";
import { useLocation } from "react-router-dom";
const ProductDetails = () =>

{
    const location = useLocation()
console.log(location);
    return(<>
      <p>productDetails</p>
    </>)
}
export default ProductDetails;