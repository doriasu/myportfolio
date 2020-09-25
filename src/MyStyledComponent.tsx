import * as React from "react";
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles";
import Icon from './shakura.jpg'
import {Grid} from "@material-ui/core";
import {useEffect, useState} from "react";
import axios from "axios"
//styleを定義
const useStyles=makeStyles((theme:Theme)=>
    createStyles({
        root:{
            padding:theme.spacing(2),
            fontSize:20,
            fontFamily:"sans-serif",
        },
        title:{
            borderBottom:`2px solid ${theme.palette.primary.main}`
        },
        about:{
            justifyContent:"center",
        },
        ul:{
            listStyle:"none"
        },
        profile_li:{
            padding:theme.spacing(1,0,1,0)
        },
        profile_img:{
            width:"100%",
            height:"100%",
            objectFit:"scale-down",

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
    const [hatena,setHatena]=useState({url:[],title:[]});
    useEffect(()=>{
        const fetchData=async()=> {
            console.log("hatena取得開始");
            const result = await axios.get("https://niconico-vocaloid-ranking.herokuapp.com/ranking_api/?hatena");
            setHatena({url:result.data.url,title:result.data.title});

        };
        fetchData();
    },[]);
    return(
        <div className={classes.root}>
            <h2 className={classes.title}>
               Who is you?
            </h2>
            <Grid container className={classes.about}>
                <Grid container item xs={3}>
            <img src={Icon} className={classes.profile_img}/>
                </Grid>
                <Grid container item xs={1}></Grid>
                <Grid container item xs={3}>
                    <ul className={classes.ul}>
                        <li className={classes.profile_li}>Takuro Omori</li>
                        <li className={classes.profile_li}>1998/12/21</li>
                        <li className={classes.profile_li}>University of Tokyo Department of Electrical and Electronic Engineering</li>
                        <li className={classes.profile_li}>Like programming,travel,music game</li>
                    </ul>
                </Grid>
            </Grid>
            <h2 className={classes.title}>
                article
            </h2>
            {hatena.url}
            {hatena.title}




        </div>
    );
}
export default MyStyleComponent;
