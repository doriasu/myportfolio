import * as React from "react";
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles";
import Icon from './shakura.jpg'
import {Grid} from "@material-ui/core";
//styleを定義
const useStyles=makeStyles((theme:Theme)=>
    createStyles({
        root:{
            padding:theme.spacing(2)
        },
        title:{
            borderBottom:`2px solid ${theme.palette.primary.main}`
        },
        about:{
            justifyContent:"center"
        },
        ul:{
            listStyle:"none"
        },
        profile_li:{
            padding:theme.spacing(1,0,1,0)
        }
    })
);

//propsの定義
type Props={
    title?:string;
};

//コンポーネントの定義
function MyStyleComponent({title}:Props){
    const classes=useStyles();
    return(
        <div className={classes.root}>
            <h2 className={classes.title}>
               Who is you?
            </h2>
            <Grid container className={classes.about}>
                <Grid container item xs={3}>
            <img src={Icon} width="400" height="400"/>
                </Grid>
                <Grid container item xs={1}></Grid>
                <Grid container item xs={3}>
                    <ul className={classes.ul}>
                        <li className={classes.profile_li}>Name Takuro Omori</li>
                        <li className={classes.profile_li}>Age 21</li>
                        <li className={classes.profile_li}>University University of Tokyo Department of Electrical and Electronic Engineering</li>
                        <li className={classes.profile_li}>hobby programming,travel with train</li>
                    </ul>
                </Grid>
            </Grid>

        </div>
    );
}
export default MyStyleComponent;
