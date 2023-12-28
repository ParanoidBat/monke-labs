import { Grid, Typography } from "@mui/material"
import styles from "./styles"
import WavingHandSVG from '../../assets/waving_hand.svg'
import SearchSVG from '../../assets/search.svg'
import SaladSVG from '../../assets/salad.svg'
import SteakSVG from '../../assets/steak.svg'

const categorySVGS = [
    SaladSVG,
    SteakSVG,
    SaladSVG
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
                    categorySVGS.map((svg, idx) => {
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
        </>
    )
}