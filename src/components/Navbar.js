import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import LogoShopIcon from '@material-ui/icons/FitnessCenter';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Navbar = () => {

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
    const classes = useStyles();

    return (
        <div className={styles.Navbar}>

            <AppBar  position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                        <NavLink className={styles.NavLogo} to='/'> <LogoShopIcon color ='action' fontSize='large'/></NavLink>

                    </IconButton>
                    <Typography className={classes.title}>
                        <NavLink  className={styles.NavProducts} to='/'>Products </NavLink>
                    </Typography>

                    <NavLink className={styles.NavCart} to='/cart'> <ShoppingCartIcon   fontSize='large'/></NavLink>

                </Toolbar>
            </AppBar>
        </div>


    )
}

export default Navbar