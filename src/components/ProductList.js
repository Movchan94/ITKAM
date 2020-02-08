import React from 'react'
import styles from './ProductList.module.css'
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from "./context";


const ProductList = () => {

    return (

            <div>
                <Title name='Our' title='products'/>
                <div className={styles.productList}>
                    <ProductConsumer>
                        {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product}/>
                            })
                        }
                        }
                    </ProductConsumer>
                </div>
            </div>

    )
}

export default ProductList