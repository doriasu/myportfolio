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
            <ul className={classes.ul}>
                <li>C/C++</li>
                <li>C#</li>
                <li>Python</li>
                <li>Typescript,React(Studying Now)</li>
            </ul>
            </Grid>


        </div>
    );
}
export default Skill;
