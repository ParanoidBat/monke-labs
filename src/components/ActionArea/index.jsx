import { Grid, Typography } from "@mui/material"
import ActionButton from "../ActionButton"
import styles from "./styles"

export default function ActionArea({tag, price, btnText}){
    return (
        <Grid container>
            <Grid item xs={6}>
                <Grid>
                    <Typography style={styles.tag} >{tag}</Typography>
                    <Typography style={styles.price} >{price}&nbsp;<span style={{color: '#e74c1b'}}>$</span></Typography>
                </Grid>
            </Grid>
            <Grid item xs={6}><ActionButton text={btnText} /></Grid>
        </Grid>
    )
}