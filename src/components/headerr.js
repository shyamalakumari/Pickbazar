import React from "react";

const Header = () => {
    return (
        <>
        <ul>
        <Link to="/">
            <li>
                Home
            </li>
            </Link>
            <Link to="/productDetails">
            <li>
                productDetails
            </li>
            
            </Link>
        </ul>
        </>
    )
}