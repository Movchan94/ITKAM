import React from 'react'
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from "./context";


const ProductList =()=> {

    return (
        <React.Fragment>
            <div>
               <Title name ='Our' title ='products'/>
               <div>
<ProductConsumer>
    {value=>{
        return value.products.map(product => {
            return <Product key={product.id} product = {product}/>
        })
        }
    }
</ProductConsumer>
               </div>
            </div>
        </React.Fragment>
    )
}

export default ProductList