import React from 'react'
import Product from "./Product";
import Title from "./Title";

let state = {
    products:[]
}

const ProductList =()=> {

    return (
        <React.Fragment>
            <div>
               <Title name ='Our' title ='products'/>
            </div>
        </React.Fragment>
    )
}

export default ProductList