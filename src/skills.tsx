import * as React from "react";
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles";
import Icon from './shakura.jpg'
import {Button, CardActions, Grid, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
            objectFit:'scale-down',
            marginBottom:'1px'
        },
        txt:{
            display:'flex',
            alignItems:'center',
            justifyContent: 'center'
        }

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
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/144px-The_C_Programming_Language_logo.svg.png`} className={classes.img} />
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.txt} color="textSecondary">
                                Word of the Day
                            </Typography>
                        </CardContent>

                    </Card>
                <div className={classes.txt}>
                    <ul><li>3years experiences</li><li>making C compiler</li><li>made QNX driver</li></ul>
                </div></Grid>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/cpp_logo_out.png`} className={classes.img} /><div className={classes.txt}>
                    <ul><li>3years experiences</li><li>competitive programming</li></ul>
                </div></Grid>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/Logo_Java_out.jpg`} className={classes.img} /><div className={classes.txt}>
                    <ul><li>6months experiences</li><li>for beginning of my programming</li></ul>
                </div></Grid>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/python-logo.png`}  className={classes.img}/><div className={classes.txt}>
                    <ul><li>2years experiences</li><li>making tools(for slack or discord)</li><li>WebScraping</li><li>machine learning</li></ul>
                </div></Grid>

            </Grid>
            <Grid container className={classes.ul}>
                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/144px-C_Sharp_wordmark.svg.png`} className={classes.img} /><div className={classes.txt}>
                    <ul><li>4months experiences</li><li>making AR Application(by Unity)</li></ul>
                </div></Grid>

                <Grid item xs={3}><img src={`${process.env.PUBLIC_URL}/skill_pic/ts-100x100.png`} className={classes.img} /><div className={classes.txt}>
                    <ul><li>6months experiences</li><li>making this site(by react)</li><li>made many tools(see Github!)</li></ul>
                </div></Grid>


            </Grid>


        </div>
    );
}
export default Skill;
