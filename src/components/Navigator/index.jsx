import { Grid } from '@mui/material'
import HomeSVG from '../../assets/home.svg'
import HeartSVG from '../../assets/nav_heart.svg'
import StatsSVG from '../../assets/stats.svg'
import ProfileSVG from '../../assets/profilecircle.svg'
import BagSVG from '../../assets/bag2.svg'
import styles from './styles'

export default function Navigator(){
    return (
        <Grid container item alignItems={"baseline"} justifyContent={"space-between"} style={styles.nav} >
            <Grid item xs={2}> <img src={HomeSVG} alt='Home icon' /></Grid>
            <Grid item xs={2}> <img src={HeartSVG} alt='Favourite icon' /></Grid>
            <Grid item xs={2}> <img src={BagSVG} alt='Bag icon' /></Grid>
            <Grid item xs={2}> <img src={StatsSVG} alt='Stats icon' /></Grid>
            <Grid item xs={2}> <img src={ProfileSVG} alt='Profile icon' /></Grid>
        </Grid>
    )
}