import { Grid, Typography } from "@mui/material"
import ArrowLeftSVG from '../../assets/arrowleft.svg'
import HeartSVG from '../../assets/product_heart.svg'
import AddSVG from '../../assets/addcircle.svg'
import MinusSVG from '../../assets/minuscircle.svg'
import StarSVG from '../../assets/star.svg'
import SteakImage from '../../assets/steak.png'
import styles from "./styles"
import PriceDisplay from "../../components/PriceDisplay"
import ActionButton from "../../components/ActionButton"

export default function Product(){
    return(
        <>
        <Grid container direction={"column"} rowGap={2} style={styles.container} >
            <Grid container item xs={1}>
                <Grid item xs={10}><img src={ArrowLeftSVG} alt="Back icon" /></Grid>
                <Grid item xs={2}><img src={HeartSVG} alt="Favourite icon"/></Grid>
            </Grid>
            <Grid item xs={1}>
                <Typography style={styles.heading} >Grilled Beef Steak with Mushroom sauce</Typography>
                <Typography style={styles.caption} >By Steak House</Typography>
            </Grid>
            <Grid container item xs={5}>
                <Grid container item xs={2} direction={"column"}>
                    <Grid item>
                        <img src={StarSVG} alt="Rating icon" />
                        <span style={{fontSize: 16}}>&nbsp;4.5</span>
                    </Grid>
                    <Grid item>
                        <div>
                            <img src={AddSVG} alt="Add icon" />
                        </div>
                        <Typography fontSize={30} textAlign={"center"} >1</Typography>
                        <div>
                            <img src={MinusSVG} alt="Subtract icon" />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <img src={SteakImage} alt="Product image" style={{ width: '100%' }} />
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Typography style={styles.subHeading}>Description</Typography>
                <Typography style={styles.desc} >Indulge in the mouthwatering delight of a perfectly grilled beef steak generously topped with a rich and savory mushroom sauce.</Typography>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <PriceDisplay tag={"Price"} price={25.27}  />
                </Grid>
                <Grid item xs={6}><ActionButton text={"Add to cart"} /></Grid>
            </Grid>
        </Grid>
        </>
    )
}