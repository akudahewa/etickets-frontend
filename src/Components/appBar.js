import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Logo from '../images/etickets_logo.png';



export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" classes={{ root: classes.abRoot, }}>
                <Container >
                    <Toolbar className={classes.appBarContainer}>
                        <img src={Logo} height={50} />
                        <Link className={classes.Links} to="/">Home </Link>
                        <Link className={classes.Links} to="/movies">Movies</Link>
                        <Button className={classes.loginButton} color="inherit">Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    abRoot: {
        backgroundColor: "#333345",

    },
    appBarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection:'row'
    },
    loginButton:{
        marginLeft:'auto'
    },
    Links:{
        textDecoration:'none',
        color:'#fff',
        marginLeft:10,
        marginRight:10
    }
}));