import React from 'react'
import {storeProducts, detailProduct} from "../data";


const ProductContext = React.createContext()

class ProductProvider extends React.Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartTotal: 0,


    }

    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }
    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState(() => {
            return {detailProduct: product}
        })
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        }, () => {
            this.addTotals()
        })
    }
    openModal = id => {
        const product = this.getItem(id)
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }
    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }
<<<<<<< HEAD
    increment = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item=>item.id === id)

        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        product.count = product.count + 1
        product.total = product.count * product.price


=======
    increment = (i) => {
       let tempCart = [...this.state.cart]
       const salectedProduct = tempCart.find(item => item.id !== id)
        const index = tempCart.indexOf(salectedProduct)
        const product = tempCart[index]
        product.count = product.count + 1
        product.total = product.count * product.price

>>>>>>> c4e9b20b366730740ef0d61b7cd9e819d9a40673
        this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals()})
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item=>item.id === id)

        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count - 1

        if(product.count === 0){
            this.removeItem(id)
        }else{
            product.total = product.count * product.price
            this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals()})
        }

    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]

        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0

<<<<<<< HEAD
        this.setState(()=>{
            return {
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },()=>{
            this.addTotals()
        })
=======
        this.setState(() => {
                return {
                    cart: [...tempCart],
                    products: [...tempProducts]
                }
            },
            () => {

                this.addTotals()

            }
        )
>>>>>>> c4e9b20b366730740ef0d61b7cd9e819d9a40673
    }
    clearCart = () => {
        this.setState(() => {
                return {cart: []};
            },
            () => {
                this.setProducts()
                this.addTotals()

            })
    }
<<<<<<< HEAD
    addTotals =()=>{
    let cartTotal = 0;
    this.state.cart.map(item=>(cartTotal += item.total))
        this.setState(()=>{
            return {
                cartTotal:cartTotal,
=======
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
>>>>>>> c4e9b20b366730740ef0d61b7cd9e819d9a40673
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart

                }}>

                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}

