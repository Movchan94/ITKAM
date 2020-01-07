import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import LogoShopIcon from '@material-ui/icons/FitnessCenter';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";


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

            <AppBar className={styles.APP} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                        <NavLink to='/'> <LogoShopIcon fontSize='large'/></NavLink>

                    </IconButton>
                    <Typography className={classes.title}>
                    </Typography>

                    <NavLink  className={styles.NavProducts} to='/'>Products </NavLink>

                </Toolbar>
            </AppBar>
        </div>


    )
}

export default Navbar