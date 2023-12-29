import { useContext, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import ArrowLeftSVG from "../../assets/product_page/arrowleft.svg";
import CartItem from "../../components/CartItem";
import ActionArea from "../../components/ActionArea";
import CakeSVG from "../../assets/cart/cake.svg";
import SaladSVG from "../../assets/cart/cart_salad.svg";
import SteakSVG from "../../assets/cart/cart_steak.svg";
import VeggiesSVG from "../../assets/cart/cart_veggies.svg";
import MixSaladSVG from "../../assets/cart/mix_salad.svg";
import styles from "./styles";

const cartSVGs = [CakeSVG, SaladSVG, SteakSVG, VeggiesSVG, MixSaladSVG];

export default function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateCartTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.price));

    return total;
  };

  const [total, _] = useState(calculateCartTotal);

  return (
    <Grid container style={styles.container} gap={3}>
      <Grid container item>
        <Grid item xs={4}>
          <img src={ArrowLeftSVG} alt="Back icon" />
        </Grid>
        <Grid item>
          <Typography style={styles.heading}>My Bucket</Typography>
        </Grid>
      </Grid>
      <Grid container item rowGap={2.5}>
        {cart.map((item, idx) => (
          <CartItem item={item} key={idx} svg={cartSVGs[idx]} />
        ))}
      </Grid>
      <ActionArea
        tag={"Total"}
        price={total}
        btnText={"Checkout"}
        btnAction={() => navigate(`/checkout?total=${total}`)}
      />
    </Grid>
  );
}
