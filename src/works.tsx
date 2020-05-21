import * as React from "react";
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles";
import Icon from './shakura.jpg'
import {Button, Grid} from "@material-ui/core";
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
        }

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
                    <Button className={classes.work_button} onClick={()=>{window.location.assign(("https://github.com/doriasu/slack_bot"))}}>
                    <Paper elevation={10} >
                        <div className={classes.work_title}>chunithmnetのスクレイピング</div>
                        <br />
                        <div>
                            selenium,beautifulsoupをPythonで扱い、ログインの必要なchunithmnetというサイトをスクレイピングし、必要に応じてデータを加工します。
                        </div>
                    </Paper>
                    </Button>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <Button className={classes.work_button} onClick={()=>{window.location.assign(("https://doradorasuki.hatenablog.com/entry/2019/12/16/000132"))}}>
                    <Paper elevation={10}>
                        <div className={classes.work_title}>MikuARの作成</div>
                        <br/>
                        <div>
                            バーチャルシンガー初音ミクの3DMMDモデルをARFoundationを用いて現実世界に投影するiOS向けアプリです。一緒に写真を撮ったり歌に合わせて踊っている様子を端末を通してみることができます。
                        </div>
                    </Paper>
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <Button className={classes.work_button} onClick={()=>{window.location.assign(("https://github.com/doriasu/myportfolio"))}}>
                        <Paper elevation={10}>
                            <div className={classes.work_title}>このサイトの作成</div>
                            <br/>
                            <div>
                                react,typescriptの練習がてらこのサイトを制作しました。material UIを採用しています。
                            </div>
                        </Paper>
                    </Button>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <Button className={classes.work_button} onClick={()=>{window.location.assign(("https://github.com/doriasu/FixstarsInternship"))}}>
                        <Paper elevation={10}>
                            <div className={classes.work_title}>QNXを用いたカメラドライバの作成</div>
                            <br/>
                            <div>
                                FixstartInternshipにてQNXという組み込み向けOS向けのカメラドライバをC言語を用いて作成しました。
                            </div>
                        </Paper>
                    </Button>
                </Grid>
            </Grid>




        </div>
    );
}
export default Work;
