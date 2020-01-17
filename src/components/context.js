import React from 'react'
import {storeProducts, detailProduct} from "../data";


const ProductContext = React.createContext()

class ProductProvider extends React.Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
    handleDetail =()=> {
        console.log('hello niggas')
    }
    addToCart =()=> {
        console.log('hello')
    }
    render() {
        return (
            <ProductContext.Provider value = {{
...this.state,
                handleDetail:this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}

