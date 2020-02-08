import React from 'react'
import styled from 'styled-components'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {ProductConsumer} from "./context";


const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        margin: 20,


    },
    media: {
        height: 350,
    },
});

export default function Product(props) {
    const {id, title, img, price, inCart} = props.product;
    const classes = useStyles();

    return (
        <ProductConsumer>
            {(value) => (
                <div onClick={() => value.handleDetail(id)}>
                    <Card className={classes.card}>
                        <Link to='/details'>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {title} ${price}
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary"
                                                component="p">
                                        Lizards are a widespread group of squamate
                                        reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <CardActions>
                            <Button
                                size="large"
                                color="primary"
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id)
                                    value.openModal(id)
                                }}
                            >
                                {inCart
                                    ? (<p className='text-capitalize mb-0' disabled>
                                        {''}
                                        in inCart</p>)
                                    : (<AddShoppingCartIcon/>)
                                }
                            </Button>
                        </CardActions>
                    </Card>
                </div>)}
        </ProductConsumer>
    )
}



