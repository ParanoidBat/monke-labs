import { Grid, Typography } from "@mui/material";
import styles from "./styles";

export default function PriceDisplay({tag, price}){
    return (
        <Grid>
            <Typography style={styles.tag} >{tag}</Typography>
            <Typography style={styles.price} >{price}&nbsp;<span style={{color: '#e74c1b'}}>$</span></Typography>
        </Grid>
    )
}