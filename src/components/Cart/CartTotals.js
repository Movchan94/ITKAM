import React from 'react'
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core";


const CartTotals = ({value}) => {

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();

const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
<div className='container'>
    <div className='row'>
        <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
            <Link to ='/'>
                <Button
                    onClick={()=>{
                        clearCart()
                    }}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            </Link>
            <h5>
                <span className='text-title'>subtotal:</span>
                <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
                <span className='text-title'>tax:</span>
                <strong>$ {cartTax}</strong>
            </h5>
            <h5>
                <span className='text-title'>total:</span>
                <strong>$ {cartTotal}</strong>
            </h5>
        </div>
    </div>
</div>
        </React.Fragment>
    )
}


export default CartTotals

