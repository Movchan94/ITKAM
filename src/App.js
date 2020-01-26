import React from 'react';
import {Switch, Route} from 'react-router-dom'
import styles from './App.module.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";


class App extends React.Component {
    render() {
        return (
            <div className={styles.App}>

                <div className={styles.Header}>
                    <Navbar/>
                </div>
                <div className={styles.Article}>
                    <Switch>
                        <Route exact path='/' component={ProductList}/>
                        <Route path='/details' component={Details}/>
                        <Route path='/cart' component={Cart}/>
                        <Route component={Default}/>
                    </Switch>
                </div>
                <Modal/>
                <div className={styles.Footer}>Footer</div>
            </div>

        )
    }

}

export default App;
