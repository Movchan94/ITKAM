import React from 'react'
import {ProductConsumer} from "./context";
import {Link} from "react-router-dom";



const Details = () => {


    return (
        <ProductConsumer>
            {(value) => {
            const {id, company, img, info, price, title, inCart} = value.detailProduct

                return (
                  <div>
                      <h1>{title}</h1>
                      <h5>Price:-${price}</h5>
                      <img src = {img}/>
                      <p>{info}</p>
                      <Link to = '/'>
                          <button>Back to products</button>
                      </Link>
                      <button
                      disabled={inCart ? true : false}
                      onClick={()=>{
                          value.addToCart(id)
                      }}
                      >{inCart ? 'inCart': 'add to cart'}</button>


                  </div>
                )
            }}
        </ProductConsumer>
    )
}

export default Details

