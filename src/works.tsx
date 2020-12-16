import * as React from "react";
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles";
import Icon from './shakura.jpg'
import {Button, Grid, Card, CardActionArea, CardMedia, CardContent, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

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
    return (
        <div className={classes.root}>
            <h2 className={classes.title}>
                Works
            </h2>
            <Grid container className={classes.grid}>
                <Grid item xs={5}>
                    <Card className={classes.work_button}>
                        <ButtonBase
                            onClick={event => {window.location.href="https://doradorasuki.hatenablog.com/entry/2019/09/16/235140"}}
                        >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`${process.env.PUBLIC_URL}/work_pic/chuni.png`}
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
                        </ButtonBase>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <Card className={classes.work_button}>
                        <ButtonBase onClick={event => {window.location.href="https://doradorasuki.hatenablog.com/entry/2019/12/16/000132"}}>
                        <CardActionArea>
                            <CardMedia
                                component="iframe"
                                className={classes.media}
                                image={`${process.env.PUBLIC_URL}/work_pic/miku.mp4`}
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
                        </ButtonBase>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Card className={classes.work_button}>
                        <ButtonBase onClick={event => {window.location.href="https://github.com/doriasu/myportfolio"}}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`${process.env.PUBLIC_URL}/work_pic/noimage.png`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    このサイトの作成
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    react,typescriptの練習がてらこのサイトを制作しました。material UIを採用していて、netlifyにてホスティングしています。ブログ記事は別途Djangoでapiサーバを立てて自動取得しています。
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </ButtonBase>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <Card className={classes.work_button}>
                        <ButtonBase onClick={event => {window.location.href="https://github.com/doriasu/FixstarsInternship"}}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`${process.env.PUBLIC_URL}/work_pic/noimage.png`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    QNXを用いたカメラドライバの作成
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    FixstartInternshipにてQNXという組み込みOS向けのカメラドライバをC言語を用いて作成しました。beaglebone上で動作します。
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </ButtonBase>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Card className={classes.work_button}>
                        <ButtonBase onClick={event => {window.location.href="https://jointsound.netlify.app/"}}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/work_pic/jointsound.png`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        JointSound(共同編集音楽アプリ)の作成
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        JPHacks2020にて334JST(B_2021)として出場しfinalistに選ばれました。<br/>RoomIDを一致させれば声の切り貼りや音源追加等により誰でも簡単に音楽をリアルタイム共同編集できます。<br/>主にフロント部分を友人と共同で作成しました(Vue.js)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </ButtonBase>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>

                </Grid>
            </Grid>


        </div>
    );

}
export default Work;
