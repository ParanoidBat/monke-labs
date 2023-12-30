import { useContext, useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../../components/CartItem";
import ActionArea from "../../components/ActionArea";
import CakeSVG from "../../assets/cart/cake.svg";
import SaladSVG from "../../assets/cart/cart_salad.svg";
import SteakSVG from "../../assets/cart/cart_steak.svg";
import VeggiesSVG from "../../assets/cart/cart_veggies.svg";
import MixSaladSVG from "../../assets/cart/mix_salad.svg";
import CartIllustration from "../../assets/cart/cart_ilt.svg";
import styles from "./styles";
import BackArrow from "../../components/BackArrow";

const cartSVGs = [CakeSVG, SaladSVG, SteakSVG, VeggiesSVG, MixSaladSVG];

export default function Cart() {
  // eslint-disable-next-line no-unused-vars
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.quantity));

    setTotal(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.length]);

  const handleButtonAction = () => {
    if (cart.length) navigate(`/checkout?total=${total}`);
  };

  const handleRemoveItem = (idx) => {
    const arr = cart.filter((_, index) => index !== idx);
    setCart(arr);
  };

  return (
    <Grid
      container
      style={styles.container}
      sx={{
        padding: {
          xs: "10px 15px",
          md: "10px 225px",
        },
        "& p": {
          fontFamily: "Poppins",
        },
      }}
      gap={3}
    >
      <Grid container item>
        <Grid item xs={4}>
          <BackArrow location={-1} />
        </Grid>
        <Grid item>
          <Typography style={styles.heading}>My Bucket</Typography>
        </Grid>
      </Grid>
      <Stack rowGap={2} style={styles.itemsContainer}>
        {cart.map((item, idx) => (
          <CartItem
            item={item}
            key={idx}
            svg={cartSVGs[idx]}
            index={idx}
            removeItem={handleRemoveItem}
          />
        ))}
      </Stack>
      <Grid
        item
        xs={5}
        sx={{
          position: "relative",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <img style={styles.image} src={CartIllustration} />
      </Grid>
      <ActionArea
        tag={"Total"}
        price={total}
        btnText={"Checkout"}
        btnAction={handleButtonAction}
      />
    </Grid>
  );
}
