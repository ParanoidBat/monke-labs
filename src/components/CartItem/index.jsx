import { Grid, Typography } from "@mui/material";
import MinusSVG from "../../assets/cart/minuscircle.svg";
import styles from "./styles";

export default function CartItem({ item, svg, index, removeItem }) {
  return (
    <Grid container justifyContent={"space-between"} style={styles.container}>
      <Grid container item xs={3}>
        <img src={svg} alt="Cart item image" />
      </Grid>
      <Grid
        container
        item
        xs={8}
        alignContent={"space-between"}
        justifyContent={"space-between"}
      >
        <Typography style={styles.desc}>{item.info}</Typography>
        <img onClick={() => removeItem(index)} src={MinusSVG} />
        <Grid item xs={6}>
          <Typography style={styles.quantity}>
            Quantity&nbsp;{item.quantity}
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={styles.price}>
            <span style={{ color: "#e74c1b" }}>$</span>&nbsp;{item.price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
