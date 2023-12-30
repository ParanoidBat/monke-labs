import { useState, useContext } from "react";
import { Grid, Typography, Dialog, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CartContext } from "../../contexts/CartContext";
import ArrowLeftSVG from "../../assets/product_page/arrowleft.svg";
import HeartSVG from "../../assets/product_page/product_heart.svg";
import AddSVG from "../../assets/product_page/addcircle.svg";
import MinusSVG from "../../assets/product_page/minuscircle.svg";
import StarSVG from "../../assets/product_page/star.svg";
import SteakImage from "../../assets/product_page/steak.png";
import ActionArea from "../ActionArea";
import styles from "./styles";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  float: "inline-end",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

const AddSubImage = styled("img")(() => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

export default function ProductModal({ handleClose, open, product }) {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleSub = () =>
    setQuantity((prev) => {
      if (quantity === 0) return prev;
      return prev - 1;
    });

  const handleAddToCart = () => {
    if (quantity === 0) return;

    const cartItem = {
      info: product.info,
      price: product.price,
      quantity: quantity,
      svg: product.svg,
    };

    const arr = cart;
    arr.push(cartItem);

    setCart(arr);

    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "50px",
        },
        "& p": {
          fontFamily: "Poppins",
        },
      }}
    >
      <Grid container direction={"column"} rowGap={2} style={styles.container}>
        <Grid container item xs={1}>
          <Grid item xs={10}>
            <img onClick={handleClose} src={ArrowLeftSVG} alt="Back icon" />
          </Grid>
          <Grid item xs={2}>
            <img src={HeartSVG} alt="Favourite icon" />
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Typography style={styles.heading}>{product.info}</Typography>
          <Typography style={styles.caption}>By Steak House</Typography>
        </Grid>
        <Grid container item>
          <Grid container item xs={2} direction={"column"}>
            <Grid item alignSelf={"center"}>
              <img src={StarSVG} alt="Rating icon" />
              <span style={{ fontSize: 16 }}>&nbsp;{product.rating}</span>
            </Grid>
            <Stack alignItems={"center"}>
              <div onClick={handleAdd}>
                <AddSubImage src={AddSVG} alt="Add icon" />
              </div>
              <Typography fontSize={30}>{quantity}</Typography>
              <div onClick={handleSub}>
                <AddSubImage src={MinusSVG} alt="Subtract icon" />
              </div>
            </Stack>
          </Grid>
          <Grid item xs={10}>
            <Image src={SteakImage} alt="Product image" />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.subHeading}>Description</Typography>
          <Typography style={styles.desc}>{product.desc}</Typography>
        </Grid>
        <ActionArea
          tag={"Price"}
          price={product.price}
          btnText={"Add to cart"}
          btnAction={handleAddToCart}
          btnWidth={190}
        />
      </Grid>
    </Dialog>
  );
}
