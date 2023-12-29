import { Grid, Typography } from "@mui/material"
import styles from "./styles"
import WavingHandSVG from '../../assets/waving_hand.svg'
import SearchSVG from '../../assets/search.svg'
import SaladSVG from '../../assets/salad.svg'
import SteakSVG from '../../assets/steak.svg'
import GreenSaladSVG from '../../assets/greensalad.svg'
import FreshVegiesSVG from '../../assets/freshvegies.svg'
import CherriesSVG from '../../assets/cherries.svg'
import EggsSVG from '../../assets/eggs.svg'
import HeartSVG from '../../assets/heart.svg'

const categorySVGs = [
    SaladSVG,
    SteakSVG,
    SaladSVG
]
const itemSVGs = [
    {
        item: GreenSaladSVG,
        info: "Green salad with mashed potatoes",
        price: 12.22
    },
    {
        item: FreshVegiesSVG,
        info: "Fresh vegetable salad",
        price: 11.22
    },
    {
        item: CherriesSVG,
        info: "Cherries with leaves",
        price: 10.22
    },
    {
        item: EggsSVG,
        info: "Soft boiled eggs with vegetables",
        price: 15.50
    },
    {
        item: GreenSaladSVG,
        info: "Green salad with mashed potatoes",
        price: 12.22
    },
    {
        item: CherriesSVG,
        info: "Cherries with leaves",
        price: 10.22
    },
    {
        item: EggsSVG,
        info: "Soft boiled eggs with vegetables",
        price: 15.50
    },
    {
        item: FreshVegiesSVG,
        info: "Fresh vegetable salad",
        price: 11.22
    }
]

export default function Home(){
    return (
        <>
            <Grid container style={{marginTop: 74}} >
                <Grid item xs={5} >
                    <Typography style={styles.heading} >Hey Danial</Typography>
                    <Typography>It&apos;s dinner time!</Typography>
                </Grid>
                <Grid container item xs={7} justifyContent={"space-between"} >
                    <Grid item> <img src={WavingHandSVG} /> </Grid>
                    <Grid item> <img src={SearchSVG} /> </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent={"space-between"} >
                <Grid item>
                    <Typography style={styles.subHeading} >Categories</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{...styles.subHeading, color: '#e74c1b'}}>See all</Typography>
                </Grid>
            </Grid>
            <Grid container wrap="nowrap" style={{overflowX: "auto"}}  >
                {
                    categorySVGs.map((svg, idx) => {
                        return (
                        <Grid item key={`category-${idx}`} style={{marginRight: 15}} >
                            <img src={svg} style={styles.category} />
                        </Grid>
                        )
                    })
                }

            </Grid>
            <Grid container justifyContent={"space-between"} >
                <Grid item>
                    <Typography style={styles.subHeading} >Recommended Items</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{...styles.subHeading, color: '#e74c1b'}}>Filter</Typography>
                </Grid>
            </Grid>
            <Grid container style={{overflowY: "auto"}} justifyContent={"space-between"} >
                {
                    itemSVGs.map((svg, idx) => {
                        return (
                            <Grid container item direction={"column"} key={`item-${idx}`} xs={5} >
                                <Grid item >
                                    <img src={svg.item} style={styles.item} />
                                </Grid>
                                <Grid container item style={styles.info} justifyContent={"space-between"} >
                                    <Typography style={styles.infoText} >{svg.info}</Typography>
                                        <Grid item xs={6}>
                                            <Typography><span style={{color: "#e74c1b"}} >$</span>&nbsp;{svg.price}</Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{textAlign: "end"}} > <img src={HeartSVG} /> </Grid>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}