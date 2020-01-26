import React from 'react'
import {ProductConsumer} from "./context";
import {Link} from "react-router-dom";
import styled from 'styled-components'

const Modal = () => {

    const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom 0;
    background:rgb(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
    background:white
    }
    `;
    return (
        <ProductConsumer>
            {(value) => {
                const {modalOpen, closeModal} = value;
                const {img, title, price} = value.modalProduct;

                if (!modalOpen) {
                    return null;
                } else {
                    return (
                        <ModalContainer>
                            <div className='container'>
                                <div className='row'>
                                    <div id='modal'
                                         className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                                        <h5>item added to the cart</h5>
                                        <img src={img} className='img-fluid'/>
                                        <h5>{title}</h5>
                                        <h5 className='text-muted'>price:$ {price}</h5>
                                        <Link to='/'>
                                            <button onClick={() => {
                                                closeModal()
                                            }}>
                                                Store
                                            </button>
                                        </Link>
                                        <Link to='/cart'>
                                            <button onClick={() => {
                                                closeModal()
                                            }}>
                                                Go to cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )
                }

            }}
        </ProductConsumer>
    )
}


export default Modal

