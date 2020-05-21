import * as React from "react";
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles";
import Icon from './shakura.jpg'
import {Button, Grid, Card, CardActionArea, CardMedia, CardContent, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

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
        grid:{
            justifyContent:"start",
        },
        work_title:{
            fontSize: 25,
            color:"#00BFFF"

        },
        work_button:{
            textTransform:'none',
        },
        media: {
            height: 140,
        },

    })
);



//コンポーネントの定義
function Work(){
    const classes=useStyles();
    return(
        <div className={classes.root}>
            <h2 className={classes.title}>
                Works
            </h2>
            <Grid container className={classes.grid}>
                <Grid item xs={5}>
                    <Card className={classes.work_button}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={Icon}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    chunithmnetのスクレイピング
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    selenium,beautifulsoupをPythonで扱い、ログインの必要なchunithmnetというサイトをスクレイピングし、必要に応じてデータを加工します。
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <Card className={classes.work_button}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={Icon}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    MikuARの作成
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    バーチャルシンガー初音ミクの3DMMDモデルをARFoundationを用いて現実世界に投影するiOS向けアプリです。一緒に写真を撮ったり歌に合わせて踊っている様子を端末を通してみることができます。
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Card className={classes.work_button}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={Icon}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    このサイトの作成
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    react,typescriptの練習がてらこのサイトを制作しました。material UIを採用しています。
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <Card className={classes.work_button}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={Icon}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    QNXを用いたカメラドライバの作成
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    FixstartInternshipにてQNXという組み込み向けOS向けのカメラドライバをC言語を用いて作成しました。
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>




        </div>
    );
}
export default Work;
