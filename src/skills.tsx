import * as React from "react";
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles";
import Icon from './shakura.jpg'
import {Button, CardActionArea, CardActions, CardMedia, Grid, Typography} from "@material-ui/core";
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
            height: 0,
            paddingTop: '50%',
        },
        txt:{
            display:'flex',
            alignItems:'center',
            justifyContent: 'center',
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
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.img}
                            image={`${process.env.PUBLIC_URL}/skill_pic/144px-The_C_Programming_Language_logo.svg.png`}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography className={classes.txt} color="textPrimary">
                                3years experiences
                            </Typography>
                            <Typography className={classes.txt} color="textPrimary">
                                making C compiler
                            </Typography>
                            <Typography className={classes.txt} color="textPrimary">
                                made QNX driver
                            </Typography>
                        </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.img}
                                image={`${process.env.PUBLIC_URL}/skill_pic/cpp_logo_out.png`}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography className={classes.txt} color="textPrimary">
                                    3years experiences
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    competitive programming
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    AtCoderId:doradorasuki
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.img}
                                image={`${process.env.PUBLIC_URL}/skill_pic/Logo_Java_out.jpg`}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography className={classes.txt} color="textPrimary">
                                    6months experiences
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    begin of my programming
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    learn about object programming
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                    </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.img}
                                image={`${process.env.PUBLIC_URL}/skill_pic/python-logo.png`}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography className={classes.txt} color="textPrimary">
                                    2years experiences
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    making tools(for slack or discord)
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    Webscraping and machine learning
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>

            </Grid>
            <Grid container className={classes.ul}>
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.img}
                                image={`${process.env.PUBLIC_URL}/skill_pic/144px-C_Sharp_wordmark.svg.png`}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography className={classes.txt} color="textPrimary">
                                    4months experiences
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    making AR Application(by Unity)
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    learn about object programming
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.img}
                                image={`${process.env.PUBLIC_URL}/skill_pic/ts-100x100.png`}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography className={classes.txt} color="textPrimary">
                                    6months experiences
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    making this site(by react)
                                </Typography>
                                <Typography className={classes.txt} color="textPrimary">
                                    made many tools(see Github!)
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>


            </Grid>


        </div>
    );
}
export default Skill;
