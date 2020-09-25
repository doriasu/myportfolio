import React from "react";
import "./App.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from 'react-router-dom';
import {render} from "react-dom";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            color: "#ffffff",
            backgroundColor: "#0087ff"
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1,
            textAlign: "center"
        },
        boxContainer:{
            display: "flex",
            justifyContent:"space-between",
            padding:theme.spacing(0,20,0,5)
        }
    })
);

function Appbars() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" >
                <Toolbar className={classes.boxContainer}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit" onClick={()=>{window.location.href="/about"}}>about</Button>
                    <Button color="inherit" onClick={()=>{window.location.href="/skills"}}>skills</Button>
                    <Button color="inherit" onClick={()=>{window.location.href="/works"}}>Works</Button>
                    <Button color="inherit">Links</Button>

                </Toolbar>
            </AppBar>
        </div>
    );}


export default Appbars;