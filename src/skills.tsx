import * as React from "react";
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles";
import Icon from './shakura.jpg'
import {Grid} from "@material-ui/core";
//styleを定義
const useStyles=makeStyles((theme:Theme)=>
    createStyles({
        root:{
            padding:theme.spacing(2),
            fontFamily:"sans-serif",
            fontSize:20
        },
        title:{
            borderBottom:`2px solid ${theme.palette.primary.main}`
        },
        ul:{
            justifyContent:"center"
        },
        img:{
            width: '100%',
            height:'100%',
            objectFit:'scale-down'
        },

    })
);



//コンポーネントの定義
function Skill(){
    const classes=useStyles();
    return(
        <div className={classes.root}>
            <h2 className={classes.title}>
                Skills
            </h2>
            <Grid container className={classes.ul}>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/144px-The_C_Programming_Language_logo.svg.png`} className={classes.img} /></Grid>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/cpp_logo_out.png`} className={classes.img} /></Grid>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/Logo_Java_out.jpg`} className={classes.img} /></Grid>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/python-logo.png`}  className={classes.img}/></Grid>

            </Grid>
            <Grid container className={classes.ul}>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/144px-C_Sharp_wordmark.svg.png`} className={classes.img} /></Grid>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/256px-Unity_Technologies_logo.svg.png`} className={classes.img} /></Grid>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/ts-100x100.png`} className={classes.img} /></Grid>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/react_out.png`}  className={classes.img}/></Grid>

            </Grid>


        </div>
    );
}
export default Skill;
