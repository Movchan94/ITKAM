import React from 'react'
import {ProductConsumer} from "./context";
import {Link} from "react-router-dom";


const Modal = () => {

    return (
        <ProductConsumer>
            {(value) => {
                const {modalOpen, closeModal} = value;
                const {img, title, price} = value.modalProduct;

                if (!modalOpen) {
                    return null
                } else {
                    <div>
                    <h5>item added to the cart</h5>
                        <img src = {img}></img>
                        <h5>{title}</h5>
                        <h5>price:$ {price}</h5>
                        <Link to ='/'>
                            <button onClick={()=>{closeModal()}}>
                                Continue shopping
                            </button>
                        </Link>
                        <Link to ='/cart'>
                            <button onClick={()=>{closeModal()}}>
                                Go to cart
                            </button>
                        </Link>
                    </div>
                }

            }}
        </ProductConsumer>
    )
}

export default Modal

